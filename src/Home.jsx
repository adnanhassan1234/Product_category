
import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Box from "./Box";
import spinner from '../src/assets/image/spinner3.gif';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // id define
    const { id } = useParams();
    console.log(id);
    // =============== By using Fetch API  Method

    useEffect(() => {         // create .env file
        fetch(process.env.REACT_APP_BASEURL + "/products/category/" + id).then((result) => {
            result.json().then((response) => {
                console.log("🚀 ~ file: Home.jsx ~ line 22 ~ result.json ~ response", response)
                setProducts(response);
                setLoading(true);  // Loading for Safety
            })
        })

    }, []);


    return (
        <>
            <div className="work-section py-5">
                <div className="container">
                    <div className="title text-center">
                        <h2> PRODUCTS </h2>
                    </div>
                    {loading ? <div className="row" style={{ marginTop: "55px" }}>
                        {/* map method */}
                        {
                            products.map((currData, index) => {
                                return (
                                    <Box
                                        key={index}
                                        image={currData.image}
                                        title={currData.title}
                                        description={currData.description}
                                        price={currData.price}
                                    />
                                )
                            })
                        }
                    </div> : <h2 className="loading"><img src={spinner} alt="" /></h2> }
                </div>
            </div>
        </>
    )
}

export default Home;
