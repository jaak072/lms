import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container Error-style display-4">
                <h1>404</h1>
                <p>Oops! Something is wrong.</p>
                <Link to='/' > Go back in initial page, is better.</Link>
            </div>
         );
    }
}
 
export default Error;