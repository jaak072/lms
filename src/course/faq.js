import React, { Component } from 'react';

class FAQ extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3 className='my-5 text-dark' style={{textAlign:`center`}}>Frequently Asked Questions</h3>
                <div className='row my-5 justify-content-center'>
                    <div className='col-md-8'>
                        <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    When will I have access to the lectures and assignments?
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option:<br></br><br></br> 
                                        <ul>
                                            <li>
                                                The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.
                                            </li>
                                            <br></br>
                                            <li>
                                                The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience                                    
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What will I get if I subscribe to this Specialization?
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. Your electronic Certificate will be added to your Accomplishments page - from there, you can print your Certificate or add it to your LinkedIn profile.  If you only want to read and view the course content, you can audit the course for free.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Is financial aid available?
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        Yes, Coursera provides financial aid to learners who cannot afford the fee. Apply for it by clicking on the Financial Aid link beneath the "Enroll" button on the left. You'll be prompted to complete an application and will be notified if you are approved. You'll need to complete this step for each course in the Specialization, including the Capstone Project.                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{textAlign:`center`}}>
                    More questions ? Visit the <a href='#' style={{color:'#2a73cc'}}>Help Center</a>
                </p> 
            </div>
        );
    }
}
 
export default FAQ;