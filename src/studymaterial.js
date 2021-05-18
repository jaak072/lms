import React, { Component } from 'react';

class Studymaterial extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="jumbotron text-white bg-cover m-0 mask" style={{ backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)'+','+ `url(${process.env.PUBLIC_URL + 'img/good-mentor.png'})` }}>
                
                    <h1 class="display-1 text-white"><b>Study <br/> <span className="text-info">Resources</span></b></h1>
                    <p className="text-success display-6">Your study begins here</p>
                        <p class="lead">
                        <a class="btn btn-secondary px-3" href="#" role="button">Start It!</a>
                    </p>    
                </div>

                <div className="container mt-5 text-center" >

                    <h3>Hey! what you study ?</h3>

                    <div className="row mt-5" >
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Computer Science & Engineering</button>
                        </div>
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Information Technology</button>
                        </div>
                        <div className="col-md-3 col-6  mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Electronic & Communication</button>
                        </div>
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary">Electrical Engineering</button>
                        </div>
                    </div>

                    <div className="row mt-3" >
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Instrumentation (AEEIE)</button>
                        </div>
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Mechanical Engineering</button>
                        </div>
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">Civil Engineering</button>
                        </div>
                        <div className="col-md-3 col-6 mt-1">
                            <button type="button" class="btn btn-secondary">MBA</button>
                        </div>
                    </div>
                    <div className="row mt-3" >
                        <div className="col-md-3 mt-1">
                            
                        </div>
                        <div className="col-md-3 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">MCA</button>
                        </div>
                        <div className="col-md-3 mt-1">
                            <button type="button" class="btn btn-secondary mx-auto">BCA</button>
                        </div>
                        <div className="col-md-3 mt-1">
                            
                        </div>
                        
                    </div>


                </div>
            
                
            </div>
         );
    }
}
 
export default Studymaterial;