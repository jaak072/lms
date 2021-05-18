import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Jumbotaron extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="jumbotron text-white bg-cover m-0" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'img/admission.jpg'})` }}>
                
                    <h1 class="display-4"><b>Your Clear Path to <br/> Becoming a Successful <br/> Engineer</b></h1>
                    <p>Learn through online classes and guided learning maps.<br/>
                        Level up your skills and jumpstart your career</p>
                        <p class="lead">
                        <Link class="btn btn-danger btn-lg btnstart px-5" to="/coursedetails" role="button">Start learning!</Link>
                    </p>    
                </div>
                <div className="scallop-down"></div>
            </div>

            
         );
    }
}
 
export default Jumbotaron;