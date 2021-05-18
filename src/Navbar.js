import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#"><img src="./videos/logo.png" alt="" width="140" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul class="navbar-nav ml-auto topnav">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link" >Home</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/studymaterial" class="nav-link" >Study Resources</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/coursedetails" class="nav-link" >Course</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link" >WorkShop</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link" >Summer Training 2021</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/login" class="nav-link" >SignIn</Link>
                                </li>
                                
                                <li class="nav-item active dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        profileNAme
                                    </a>
                                    <div className="dropdown-menu text-dark bg-primary" aria-labelledby="navbarScrollingDropdown1">
                                        <a class="dropdown-item" href="#">MyAccount</a>
                                        <a class="dropdown-item" href="#">Support</a>
                                        <a class="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                                
                                
                            </ul>
                            <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-info " type="submit">Search</button>
                        </form>
                        </div> 

                    </nav>
            </div>
         );
    }
}
 
export default Navbar;