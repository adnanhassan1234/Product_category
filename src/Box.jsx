import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import SingleData from './Components/SingleData';


const Box = (props) => {

    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const selectedFunction = (item) => {
        console.log(item);
        if (show == true) {
          setShow(false);
          setSelectedData({});
        } else {
          setShow(true);
          setSelectedData(item);
        }
      };

    return (
        <>

    
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
                                <Button type="button" className="btn btn-primary"  onClick={() => selectedFunction(props)}> More Details </Button>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
            <SingleData show={show} selectedData={selectedData} onHide={() => setShow(false)} />
        </>
    )
}

export default Box;