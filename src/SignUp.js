import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { signUpSchema } from './Schemas/Validation';

function SignUp() {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log("🚀 ~ file: SignUp.js ~ line 20 ~ Contact ~ values", values)
            alert("You have successfully registered...");
            action.resetForm();
        }
    })
    console.log("🚀 ~ file: Contact.js ~ line 23 ~ Contact ~ errors", errors)
    return (
        <>
            {/* contact form */}
            <div className="signup_section my-5">
                <div className="container">
                    <div className="title text-center">
                        <h3>SIGN UP</h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="full">
                                {/* Formik and Yup Library used in Form validation */}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 mt-4">
                                        <Form.Label>Enter Username</Form.Label>
                                        <Form.Control type="name" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Enter Username" />
                                        {errors.name && touched.name ? <p className="form_error mx-1"> {errors.name} </p> : null}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Enter email" />
                                        {errors.email && touched.email ? <p className="form_error mx-1"> {errors.email} </p> : null}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Password" />
                                        {errors.password && touched.password ? <p className="form_error mx-1"> {errors.password} </p> : null}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" name="confirm_password" id="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" placeholder="Confirm Password" />
                                        {errors.confirm_password && touched.confirm_password ? <p className="form_error mx-1"> {errors.confirm_password} </p> : null}
                                    </Form.Group>
                                    <div className="btn_primary p-4">
                                        <Button className="text-center" variant="primary" type="submit">
                                            REGISTRATION
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

export default SignUp;
