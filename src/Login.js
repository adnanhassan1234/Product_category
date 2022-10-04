import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storeData, setAllStoreData] = useState([]);
    const [hide, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();             
        // if(name && email){                 // Store ID , name , email and password
        const newData = { id: new Date().getTime().toString(), name: name , email: email, password: password };   
        setAllStoreData([...storeData, newData]);
        setShow(true);
        setName("");
        setEmail("");
        setPassword("");
        // } else{
        //     alert("Please fill the data");
        // }
    };

    return (
        <>
            {/* contact form */}
            <div className="login_section my-5">
                <div className="container mb-3">
               {
                   hide ?  <Table className="table table-hover text-center table-bordered table-dark border-light">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                            </tr>
                            {
                                storeData.map((currElement, index) =>
                                    <tr key={index}>
                                        <td>{currElement.id}</td>
                                        <td>{currElement.name}</td>
                                        <td>{currElement.email}</td>
                                        <td>{currElement.password}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table> : null
               }
                    <div className="title text-center">
                        <h3>LOGIN</h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="full">
                                <Form onSubmit={submitForm}>
                                    <Form.Group className="mb-3 mt-4">
                                        <Form.Label>Enter Username</Form.Label>
                                        <Form.Control type="name" name="name" id="name" value={name} autoComplete="off" required placeholder="Enter Username" onChange={(e) => {
                                            setName(e.target.value);
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4">
                                        <Form.Label>Enter Email</Form.Label>
                                        <Form.Control type="email" name="email" id="email" value={email} autoComplete="off" required  placeholder="Enter Email" onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Enter Password</Form.Label>
                                        <Form.Control type="password" name="password" id="password" value={password} autoComplete="off" required  placeholder="Enter Password" onChange={(e) => {
                                            setPassword(e.target.value);
                                        }} />
                                    </Form.Group>
                                    <div className="btn_primary p-4">
                                        <Button className="text-center" variant="primary" type="submit">
                                            LOGIN
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
