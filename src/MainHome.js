import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import spinner from '../src/assets/image/spinner3.gif';

function MainHome() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASEURL}/products/categories`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("🚀 ~ file: MainHome.js ~ line 13 ~ result.json ~ response", data);
                setCategories(data);
                setLoading(true);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);
    

    return (
        //   All category
        <>
            <div className="category py-5">
                <div className="container">
                    <div className="title text-center">
                        <h2>All Types of Category </h2>
                    </div>
                  { loading ? <div className="row mt-4">
                        {
                            categories.map((curElement, index) => {

                                return (
                                    <div className="col-md-6 col-12" key={index}>
                                        <NavLink to={"product/" + curElement}>
                                            <div className="full my-3 text-center">
                                                <h2>{curElement}</h2>
                                            </div>
                                         </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div> :  <h2 className="loading1 text-center "><img src={spinner} alt="" /></h2> }
                  </div>
            </div>
        </>
    )
}

export default MainHome;