import React, { useEffect, useState } from 'react';



const Result = (props) => {

    return (
        <>

  
                        {/* start API data */}
            <div className="col-12">
                <div className="full  p-3">
                    
                        <div className="details">
                           <h4>{props.name}</h4>
                           <h4>{props.email}</h4>
                           <h4>{props.password}</h4>
                        </div>
                  
                </div>
            </div>
        </>
    )
}

export default Result;