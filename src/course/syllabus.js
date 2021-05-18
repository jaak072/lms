import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Videoplayer22 from '../video/playercontrol';


class Syllabus extends Component {
    state = {  }
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
    render() { 
        return (  
            <div>
                <h1 className='my-5 text-dark' style={{textAlign:`center`}}>Course curriculum</h1>
                <div className='row my-5 justify-content-center'>
                    <div className='col-md-8'>
                        <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h1 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">1. &nbsp; &nbsp; &nbsp; 
                                JPA and Hibernate Explained
                                </button>
                                </h1>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" onClick={this.handleOpenModal}><a ><i class="fas fa-video mx-5"></i>02. Why JPA</a></li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>03. How To Learn</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>04. Object Relational Mapping</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>05. Hibernate vs JPA</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>06. How JPA works and its advantages0</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h1 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">2. &nbsp; &nbsp; &nbsp; 
                                New JPA App Hands-on
                                </button>
                                </h1>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>07.Setting Up</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>08.Setting Up H2 Database server</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>09.New Maven project and adding dependencies</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>10.Creating a persistence context + Creating a model class</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>11.Persisting Entities with Entity Manager</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-4"></i>12.Understanding Persistence XML</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h1 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">3 &nbsp; &nbsp; &nbsp; 
                                Entity Mapping Annotations
                                </button>
                                </h1>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>13.Entity Annotations Unit Intro</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>14.@Table and @Column customizations</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>15.Temporal, Date and other data types</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>16.Dealing with Enumerations</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>17.Transient</li>
                                        <li class="list-group-item" onClick={this.handleOpenModal}><i class="fas fa-video mx-5"></i>18.Primary Key</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

                {/* Modal */}
                
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Inline Styles Modal Example"
                    style={{
                        overlay: {
                            backgroundColor: 'papayawhip'
                        },
                        content: {
                            color: 'lightsteelblue'
                        }
                        }}
                    >
                    
                    <button onClick={this.handleCloseModal} className="m-3">Close</button>
                    <Videoplayer22/>
                    </ReactModal>
            </div>

            
        );
    }
}
 
export default Syllabus;