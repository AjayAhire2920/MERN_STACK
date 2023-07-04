import "./signup.scss";

import Button from 'react-bootstrap/Button';
import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

function Signup() {
    const FormIk = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>
            <h1>
                Register a <span variant="info">new account!</span>
            </h1>
            <form onSubmit={FormIk.handleSubmit} className="register-form">
                <div className="input-block">
                    <label className="input-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        autoCapitalize="true"
                        autoComplete="off"
                        value={FormIk.values.name}
                        onChange={FormIk.handleChange}
                        onBlur={FormIk.handleBlur}
                    />
                </div>
                <div className="input-block">
                    <label className="input-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        autoCapitalize="true"
                        autoComplete="off"
                        value={FormIk.values.email}
                        onChange={FormIk.handleChange}
                        onBlur={FormIk.handleBlur}
                    />
                </div>
                <div className="input-block">
                    <label className="input-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        autoCapitalize="true"
                        autoComplete="off"
                        value={FormIk.values.password}
                        onChange={FormIk.handleChange}
                        onBlur={FormIk.handleBlur}
                    />
                </div>
                <div className="input-block">
                    <label className="input-label">Confirm Password</label>
                    <input
                        type="text"
                        name="confirm_password"
                        autoCapitalize="true"
                        autoComplete="off"
                        value={FormIk.values.confirm_password}
                        onChange={FormIk.handleChange}
                        onBlur={FormIk.handleBlur}
                    />
                </div>
                <Button variant="primary" type="submit">Let's Go</Button>
            </form>
        </div>
    );
}

export default Signup;
