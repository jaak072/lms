import React, { Component } from 'react';
import Main from './main.js';
import Navbar from './Navbar.js';
import Footer from './footer.js';
import Error from './Error.js';
import Studymaterial from './studymaterial.js'
import { Route, Switch } from 'react-router';
import Profile from './profile.js';
import CourseDetails from './course.js';
import login from './login.js';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Navbar/>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/studymaterial" component={Studymaterial} />
                <Route path="/profile" component={Profile} />
                <Route path="/coursedetails" component={CourseDetails} />
                <Route path="/login" component={login} />
                <Route component={Error} />
            </Switch>
            <Footer/>
            </div>
         );
    }
}
 
export default App;