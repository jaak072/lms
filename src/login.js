import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class login extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.state={
            email : "",
            password : ""
        }
    }
    render() { 
        return ( 
            <div className="container container-login">
                <div className="form-box-login">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username/Email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <button type="button button-login" className="btn btn-secondary btn-block">LOGIN</button>
                            <div className="message-login">
                                <div><input type="checkbox" /> <span>Remember ME</span></div>
                                <div id="forgot-pass"><Link href="#"><b>Forgot your password</b></Link></div>
                                
                        </div>
                    </form>
                    <div className="social-login">
                        <a href="#"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
                        <a href="#"><i class="fab fa-google" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default login;