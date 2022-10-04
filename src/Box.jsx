import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const Box = (props) => {

    return (
        <>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable">
                    <div className="modal-content">

                        <div className="modal-header">
                            <div className="imgs">
                                <img alt="" src={props.image} />
                            </div>
                            <h5 className="modal-title" id="staticBackdropLabel"> {props.title}</h5>
                        </div>
                        <div className="modal-body">
                            {props.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
                     {/* close model */}

                        {/* start API data */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="full  p-3">
                    <Card >
                        <div className="details">
                            <Card.Img variant="top" src={props.image} />
                            <Card.Body>
                                <Card.Title className='mb-3'> {props.title.slice(0, 33)}... </Card.Title>
                                <Card.Text>
                                    {props.description.slice(0, 105)}... 
                                </Card.Text>
                                <Card.Text>
                                    <span> <strong>Price</strong>  </span> <span style={{ float: 'right', fontWeight: 'bold', color: 'red' }}> {props.price}   </span>
                                </Card.Text>
                                <Button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" variant="primary"> More Details </Button>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Box;