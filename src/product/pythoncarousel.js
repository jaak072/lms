import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './productcard.js';

class Pythoncarousel extends Component {
    state = { 
      responsive: {
        0: { 
          items: 1
        },
        660: { 
          items: 1
        },
        768: {
          items: 2
        },
        922: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
     }
    render() { 
        return ( 

            <div className="border-10 p-3">
                <div className="container">
                    <div className='row'>
                    <div className='col-md-7'>
                        <h2>Expand your career opportunities with Python</h2>
                        <p className="block-ellipsis">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was developed upon the premise that there should be only one way (and preferably one obvious way) to do things, a philosophy that has resulted in a strict level of code standardization. The core programming language is quite small and the standard library is also large. In fact, Python's large library is one of its greatest benefits, providing a variety of different tools for programmers suited for many different tasks.</p>
                        <button type="button" class="btn btn-outline-info" to='./topic/python.jsx'>Explore Python</button>
                        
                    </div>
                    <div className='col d-none d-md-block'></div>
                    <div className='col-md-3 mx-3 d-none d-md-block'>
                    <img class="rounded-circle" style={{float:'right',width:170,height:170}} src="/img/hero-bg.jpg" alt=""/>
                    </div>
                    </div>
                
                </div>
                
                <OwlCarousel
                    items={3}
                    className="owl-theme"
                    loop={true}
                    margin={20}
                    nav={true}
                    dots={false}
                    autoplay={null}
                    items={4}
                    responsive={this.state.responsive}
                >
                    <div>
                    <ProductCard
                    badge='badge' /* Importent If Product is best seller Product then use "badge" if its not importent then use "d-none" */
                    Productimg="/img/me.jpg"
                    Producttitle="2021 Complete Python Bootcamp From Zero to Hero in Python"
                    Productsubtitle="Created by :jkworld"
                    Productdetails="Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
                    oldprice="10000"
                    newprice='8,640'
                    />
                    </div>
                    <div>
                    <ProductCard
                    badge='d-none'
                    Productimg="/img/me.jpg"
                    Producttitle="Machine Learning A-Z™: Hands-On Python & R In Data Science"
                    Productsubtitle="Created by :jkworld"
                    Productdetails="Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included."
                    oldprice="11000"
                    newprice='8,640'
                    />
                    </div>
                    <div>
                    <ProductCard
                    badge='d-none'
                    Productimg="/img/me.jpg"
                    Producttitle="Python for Data Science and Machine Learning Bootcamp"
                    Productsubtitle="Created by : Jose Portilla"
                    Productdetails="Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!"
                    oldprice="16000"
                    newprice='10560'
                    />
                    </div>
                    <div>
                    <ProductCard
                    badge='badge'
                    Productimg="/img/me.jpg"
                    Producttitle="The Python Mega Course: Build 10 Real World Applications"
                    Productsubtitle="Created by :jkworld"
                    Productdetails="Learn real-life Python skills by creating Python database apps, Python web apps, Python scrapers, & many more!"
                    oldprice="10000"
                    newprice='8,640'
                    />
                    </div>
                    <div>
                    <ProductCard
                    badge='badge'
                    Productimg="/img/me.jpg"
                    Producttitle="Learn Python Programming Masterclass"
                    Productsubtitle="Created by : NItish Singh"
                    Productdetails="This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3"
                    oldprice="10000"
                    newprice='8,640'
                    />
                    </div>
                    <div>
                    <ProductCard
                    badge='d-none'
                    Productimg="/img/me.jpg"
                    Producttitle="Learning Python for Data Analysis and Visualization"
                    Productsubtitle="Created by :jkworld"
                    Productdetails="Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!"
                    oldprice="10000"
                    newprice='9,640'
                    />
                    </div>
                </OwlCarousel>
            </div>
     );
    }
}
 
export default Pythoncarousel;