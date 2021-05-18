import React, { Component } from 'react';

class EnrollmentOptions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 m-3 p-4'>
                        <h3 className='text-dark'>Start Today with a 7-Day Free Trial</h3>
                        <p className='m-3 p-3 text-dark' style={{fontSize:`20px`}}>
                            <span><i className=' enroll-tick fas fa-check'></i> This Course Plus the Full Specialization</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Shareable Certificates</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Self-Paced Learning Option</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Course Videos & Readings</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Practice Quizzes</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Graded Assignments with Peer Feedback</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Graded Quizzes with Feedback</span><br></br>
                            <span><i className=' enroll-tick fas fa-check'></i> Graded Programming Assignments</span><br></br>
                        </p>

                        <div className='mx-2 p-4'>
                            <button className='p-3' style={{border:`none`, backgroundColor:`#2a73cc`, color:`white`}}><b>Enroll for free</b><br></br> Start May 11</button>
                        </div>

                        <div className='mx-2 p-4'>
                            <p><b>46,566</b> already enrolled</p>
                            <p>You can audit this course for free. When you audit a course, you can access the course materials without graded assignments or the ability to earn a certificate.</p>
                        </div>
                    </div>

                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 m-3 p-4'>
                        <h3 classNames='text-dark'>Shareable on <i class="fab fa-linkedin"></i></h3>
                        <img className='certificateImg m-3 p-3' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth/xdp/certificateCDP.jpg?auto=format%2Ccompress&dpr=1&w=900'></img>
                        <p className='mt-1 mx-2 p-4' style={{maxWidth:`70%`}}>
                            You can share your Course Certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EnrollmentOptions;