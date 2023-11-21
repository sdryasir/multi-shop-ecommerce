import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRegisterUserMutation } from '../redux/features/auth/authApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [registerUser, { isLoading, error, data }] = useRegisterUserMutation();

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue } = useFormik({
        initialValues: {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            cPassword: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Required'),
            userName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
            cPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: async values => {
            delete values.cPassword;
            console.log(values);
            const res = await registerUser(values).unwrap();
            if (res.success) {
                toast.success(res.message);
            } else {
                toast.error(res.message);
            }
        },
    });


    if (error) {
        return <h1>{error.message || "Something went wrong"}</h1>
    }


    return (
        <div className="container-fluid">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Create An Account</span></h2>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        <form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <input type="text" onChange={handleChange} onBlur={handleBlur} name='fullName' className="form-control" id="name" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger">{errors.fullName && touched.fullName ? errors.fullName : null}</p>
                            </div>
                            <div className="control-group">
                                <input type="text" onChange={handleChange} onBlur={handleBlur} name='userName' className="form-control" id="username" placeholder="Your Username"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger">{errors.userName && touched.userName ? errors.userName : null}</p>
                            </div>
                            <div className="control-group">
                                <input type="email" onChange={handleChange} onBlur={handleBlur} name='email' className="form-control" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger">{errors.email && touched.email ? errors.email : null}</p>
                            </div>
                            <div className="control-group">
                                <input type="password" onChange={handleChange} onBlur={handleBlur} name='password' className="form-control" id="password" placeholder="password"
                                    required="required" data-validation-required-message="Please enter a password" />
                                <p className="help-block text-danger">{errors.password && touched.password ? errors.password : null}</p>
                            </div>
                            <div className="control-group">
                                <input type="password" onChange={handleChange} onBlur={handleBlur} name='cPassword' className="form-control" id="cpassword" placeholder="confirm password"
                                    required="required" data-validation-required-message="Please enter a password again" />
                                <p className="help-block text-danger">{errors.cPassword && touched.cPassword ? errors.cPassword : null}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton" disabled={isLoading}>{isLoading ? "Loading..." : "Create Account"}</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <div className="bg-light p-30 mb-30">

                    </div>
                    <div className="bg-light p-30 mb-3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register