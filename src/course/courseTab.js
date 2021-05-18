import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutCourse from './aboutCourse';
import EnrollmentOptions from './enrollmentOptions';
import FAQ from './faq';
import Instructor from './instructor';
import Syllabus from './syllabus'

class CourseTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Tabs className='mt-4'>
                    <TabList>
                    <Tab><h5>About</h5></Tab>
                    <Tab><h5>Instructor</h5></Tab>
                    <Tab><h5>Syllabus</h5></Tab>
                    <Tab><h5>Enrollment Options</h5></Tab>
                    <Tab><h5>FAQ</h5></Tab>
                    </TabList>

                    <TabPanel>
                        <AboutCourse/>
                    </TabPanel>
                    <TabPanel>
                        <Instructor/>
                    </TabPanel>
                    <TabPanel>
                        <Syllabus/>
                    </TabPanel>
                    <TabPanel>
                        <EnrollmentOptions/>
                    </TabPanel>
                    <TabPanel>
                        <FAQ/>
                    </TabPanel>
                </Tabs>
            </div> 
        );
    }
}
 
export default CourseTab;