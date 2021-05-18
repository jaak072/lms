import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Awscarousel from './product/awscarousel';
import Datasciencecarousel from './product/datasciencecarousel';
import Excelcarousel from './product/excelcarousel';
import Javascriptcarousel from './product/javascriptcarousel';
import Pythoncarousel from './product/pythoncarousel';
import Webdevcarosel from './product/webdevcarousel';

class ProductTab extends Component {
    state = {  }
    render() { 
        return ( 
            <Tabs>
                <TabList>
                <Tab><h2 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>Python</h2></Tab>
                <Tab><h4 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>Excel</h4></Tab>
                <Tab><h4 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>JavaScript</h4></Tab>
                <Tab><h4 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>Web Development</h4></Tab>
                <Tab><h4 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>Data Sceince</h4></Tab>
                <Tab><h4 style={{'font-family': 'Grenze Gotisch'+','+ 'cursive'}}>AWS Certification</h4></Tab>
                </TabList>

                <TabPanel>
                <Pythoncarousel/>
                </TabPanel>
                <TabPanel>
                   <Excelcarousel/>
                </TabPanel>
                <TabPanel>
                    <Javascriptcarousel/>
                </TabPanel>
                <TabPanel>
                    <Webdevcarosel/>
                </TabPanel>
                <TabPanel>
                    <Datasciencecarousel/>
                </TabPanel>
                <TabPanel>
                    <Awscarousel/>
                </TabPanel>
            </Tabs>
            
         );
    }
}
 
export default ProductTab;