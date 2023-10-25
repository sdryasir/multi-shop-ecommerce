import React from 'react'

function Login() {
  return (
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Login</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <input type="email" onChange={()=>true} value={''} className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" onChange={()=>true} value={''} className="form-control" id="password" placeholder="password"
                                required="required" data-validation-required-message="Please enter a password" />
                            <p className="help-block text-danger"></p>
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