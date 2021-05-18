import React, { Component } from 'react';
import CourseTab from './courseTab';

class heading extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            
            <div class="jumbotron text-white bg-cover" style={{ backgroundImage: `url(https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=)`,backgroundRepeat:'no-repeat',backgroundSize:`cover`}}>
                <div className='row p-3'>
                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12'>
                        <p>This course is part of the <b>Web Development</b></p>
                        <h1>Web Applicationn Technologies and Django</h1>
                        <div className='mt-3'>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star unchecked"></i>
                            <b className='checked pl-2'> 4.1 </b>
                            <p className='ps-2'style={{display:`inline`}}> 876 ratings</p>
                            <i class="fas fa-thumbs-up vl checked ms-3 ps-2"></i>
                            <p className='ps-2'style={{display:`inline`}}>87%</p><br></br>
                        </div>
                        <div className='mt-3'>
                            <img className='instructor mt-2' src='https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png'></img>
                            <p className='ms-3' style={{display:`inline`}}>Charles Russell Severance</p>
                        </div>
                    </div>

                    <div className='col-md-5 col-lg-5 col-xl-5 col-sm-12 mt-4 ps-3'>
                        <h6>Offered By:</h6>
                        <img className='university' src='https://cloudfront-us-east-1.images.arcpublishing.com/gray/P6BYIPB64BOTTLTNEQPND5SI6A.jpg'></img>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 mt-4 ps-3'>
                            <div className='mt-5'>
                                <div style={{display:'inline'}}>
                                    <button className='enroll-btn p-3'><b>Enroll for free</b><br></br> Start May 11</button>
                                </div>
                                <div style={{display:'inline'}}>
                                    <h5 className=' ms-4' style={{display:`inline`}}>Try for Free: Enroll to start your 7-day full access <a href='#' style={{textDecoration:'underline', color:'white'}}>free trial</a></h5>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p><b>45,554</b> already enrolled</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div>
                <CourseTab/>
            </div> 
        </div>
        );
    }
}
 
export default heading;