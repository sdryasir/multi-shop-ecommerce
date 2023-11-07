import React from 'react'
import { useFormik } from 'formik';
 import * as Yup from 'yup';
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUserInfo } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Login() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userLogin, {isLoading, error, data}] = useLoginUserMutation();

    const {handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
          email:'',
          password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: async values => {
            const user = await userLogin(values).unwrap();
            dispatch(setUserInfo(user));
            navigate("/");
        },
      });

  return (
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Login</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="login" id="contactForm" onSubmit={handleSubmit} noValidate="novalidate">
                        <div className="control-group">
                            <input type="email" name='email' onChange={handleChange} onBlur={handleBlur} className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger">{errors.email && touched.email ? errors.email : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="password" onChange={handleChange} onBlur={handleBlur} name="password" className="form-control" id="password" placeholder="password"
                                required="required" data-validation-required-message="Please enter a password" />
                            <p className="help-block text-danger">{errors.password && touched.password ? errors.password : null}</p>
                        </div>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Login</button>
                        </div>
                    </form>
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

export default Login