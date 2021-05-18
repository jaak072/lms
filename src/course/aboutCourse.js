import React, { Component } from 'react';

class AboutCourse extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='row  m-3'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                <h3>About this Course</h3>
                                <h6 className='text-secondary'>155,456 recent views</h6>
                                <p>
                                    In this course, you'll explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the Hypertext Transfer Protocol (HTTP) request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the overall structure of a Django application.  We will explore the Model-View-Controller (MVC) pattern for web applications and how it relates to Django.  You will learn how to deploy a Django application using a service like PythonAnywhere so that it is available over the Internet. 
                                    <br></br><br></br>
                                    This is the first course in the Django for Everybody specialization. It is recommended that you complete the Python for Everybody specialization or an equivalent learning experience before beginning this series
                                </p>
                            </div>
                        </div>

                        <div className='row m-3'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">WHAT YOU WILL LEARN</h5>
                                        <div className='row'>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12  mt-4'>
                                                <i class="fas fa-check tick"></i> Explain the basics of HTTP and how the request-response cycle works
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4'>
                                                <i class="fas fa-check tick"></i> Install and deploy a simple DJango application
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4'>
                                                <i class="fas fa-check tick"></i> Build simple web pages in HTML and style them using CSS
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4'>
                                                <i class="fas fa-check tick"></i> Explain the basic operations in SQL
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">SKILLS YOU WILL GAIN</h5>
                                        <p class="card-text">
                                        <span className='skills my-5 p-2 '> Cascading Style Sheet (CSS)</span>
                                        <span className='skills my-2 p-2'>HTML</span>
                                        <span className='skills my-2 p-2'>Hypertext Transfer Protocol (HTTP)</span>
                                        <span className='skills my-2 p-2'>SQL</span>
                                        <span className='skills my-2 p-2'>Django (Web Framework)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card m-3' style={{backgroundColor:'#ddd'}}>
                            <div className='card-body'>
                                <h6 className='card-title'><i style={{border:'1px solid black',borderRadius:'50%',backgroundColor:'white'}} class="fas fa-user p-3"></i>&nbsp; Learner Career Outcomes</h6>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-briefcase p-3 bg-career"></i><span>&nbsp; 25% started a new career after completing this course</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-chart-line p-3 bg-benefit"></i><span>&nbsp; 20% got a tangible career benefit from this course</span></p>
                            </div>
                        </div>
                        <div className='card m-3' style={{border:'none'}}>
                            <div className='card-body'>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-certificate p-3"></i><span>&nbsp; Shareable Certificate</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-globe p-3"></i><span>&nbsp; 100% online</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-calendar-alt p-3"></i><span>&nbsp; Flexible deadlines</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="fas fa-signal p-3"></i><span>&nbsp; Intermediate level</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="far fa-clock p-3"></i><span>&nbsp; Approx. 15 hrs to complete</span></p>
                                <p><i style={{border:'1px solid black',borderRadius:'50%'}} class="far fa-comment-alt p-3"></i><span>&nbsp; English</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default AboutCourse;