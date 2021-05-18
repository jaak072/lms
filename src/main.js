import React, { Component } from 'react';
import Jumbotaron from './jumbotaron';
import ProductTab from './producttab';
import Studentviewsproduct from './product/studentviewsproduct';



class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Jumbotaron/>
                
                <div className="container m-auto p-0">
                    <div className="heading text-center">
                        <h3>MYWBUT.COM</h3>
                        <p>Mywbut.com is the complete online portal for Technical students.</p>
                    </div>

                    <div className="">
                        <div className='heading '><h4>The world's largest selection of courses</h4>
                        <p>Choose from 130,000 online video courses with new additions published every month.</p>
                        </div>
                    </div>
                                        
                </div>
                <div className="container">
                    <ProductTab/>
                </div>
                


                <hr className="mt-5"/>
                <div className="container bg-light">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                        <div className='col-md-2 text-center' style={{'font-size': 3+'rem', color: 'cornflowerblue'}}><i class="bi bi-play-circle-fill"></i></div>
                        <div className='col-md-10 m-auto mx-2'><h5> Over 130,000 video courses on career and personal skills</h5></div>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                        <div className='col-md-2 text-center' style={{'font-size': 3+'rem', color: 'cornflowerblue'}}><i class="bi bi-patch-check-fill"></i></div>
                        <div className='col-md-10 m-auto mx-2'><h5>Choose from top industry instructors across the world</h5></div>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                        <div className='col-md-2 text-center' style={{'font-size': 3+'rem', color: 'cornflowerblue'}}><i class="bi bi-door-open-fill"></i></div>
                        <div className='col-md-10 m-auto mx-2'><h5>Learn at your own pace, with lifetime access on mobile and desktop</h5></div>
                        </div>  
                    </div>
                </div>
                </div>
                
                <hr/>


                <div className="container mt-5 p-0">
                    <h2>Students are viewing</h2>
                    <Studentviewsproduct/>
                </div>

                <div className='card text-center text-light' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/pngtree.jpg'})`}}>
                    <div className="card-body">
                    <h1 class="card-title font-weight-bold">Get personal learning recommendations</h1>
                    <h5 class="card-text">Answer a few questions for your top picks</h5>
                    <a href="#" class="btn btn-outline-dark">Get started</a>
                    </div>

                </div>

                {/* Start catagory section */}

                <div className="container">
                    <h2 className="mb-4 mt-5 font-weight-bold">Featured topics by category</h2>

                    <div className="row">
                        <div className="col-lg-3">
                            <h5 className="category-title">Development</h5>
                            <div className="category-item">
                                <h4><a href='#'>Python</a></h4>
                                <p>26,799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Web Development</a></h4>
                                <p>776,799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Machine Learning</a></h4>
                                <p>96,799,545 students</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="category-title">Business</h5>
                            <div className="category-item">
                                <h4><a href='#'>Business Analysis</a></h4>
                                <p>799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>SQL</a></h4>
                                <p>6,799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>PMP</a></h4>
                                <p>96,799,545 students</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="category-title">IT and Software</h5>
                            <div className="category-item">
                                <h4><a href='#'>AWS Certification</a></h4>
                                <p>2,799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Ethical Hacking</a></h4>
                                <p>76,799,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Cyber Security</a></h4>
                                <p>96,799,545 students</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="category-title">Design</h5>
                            <div className="category-item">
                                <h4><a href='#'>Photoshpo</a></h4>
                                <p>26,545 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Graphics Design</a></h4>
                                <p>77,799,540 students</p>
                            </div>
                            <div className="category-item">
                                <h4><a href='#'>Drawing</a></h4>
                                <p>96,799,545 students</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-info mt-4 catagory-btn">Explore more</a>
                </div>

            {/* End Catagory section */}

            {/* Start Instrctor section */}
            

            <div className='container'>
                <h2>Our Mentor</h2>
                
            </div>
            
                
            </div>
            
         );
    }
}
 
export default Main;