import React, { Component } from 'react';

class instructor extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='row m-4'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <h3>Instructor</h3>
                        <h6 className='text-secondary'>Instructor rating &nbsp;&nbsp;<i class="fas fa-chalkboard-teacher checked"></i>&nbsp; 4.81/5 (245 ratings)</h6>
                        <div className='row'>
                            <div className='col-md-2 col-lg-2 col-xl-2 col-sm-12 m-3 p-3'>
                                <img style={{height:`100px`}} src='https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png'></img>
                            </div>
                            <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12 m-3 p-3'>
                                <h5> Charles Russell Severance</h5>
                                <p className='text-secondary'>
                                    Clinical Professor<br></br>
                                    School of Information<br></br>
                                    <span style={{fontSize:`12px`}}><i className='fas fa-users'></i><b> 10,45,778</b> learners</span><br></br>
                                    <span style={{fontSize:`12px`}}><i className='fas fa-book-open'></i><b> 45</b> courses</span>
                                </p>
                            </div>
                        </div>
                        <h3>Offered by</h3>
                        <div className='row'>
                            <div className='col-md-2 col-lg-2 col-xl-2 col-sm-12 m-3 p-3'>
                            <img className='university' src='https://cloudfront-us-east-1.images.arcpublishing.com/gray/P6BYIPB64BOTTLTNEQPND5SI6A.jpg'></img>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 m-3 p-3'>
                                <h5> University of Michigan</h5>
                                <p className='text-secondary'>
                                The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
        );
    }
}
 
export default instructor;