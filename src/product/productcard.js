import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="product-card" >
                    <div className={this.props.badge}>Bestseller</div>
                    <div className="product-tumb">
                        <img src={this.props.Productimg} alt=""/>
                    </div>
                    <div className="product-details">
                        <h4 className="product-title-ar"><a href="" >{this.props.Producttitle}</a></h4>
                        <span className="product-catagory">{this.props.Productsubtitle}</span>
                        <p className='product-details-ar'>{this.props.Productdetails}</p>
                        <div className="product-bottom-details">
                            <div className="product-price"><small>₹{this.props.oldprice}</small>₹{this.props.newprice}</div>
                            <div className="product-links">
                                <a href=""><i className="fa fa-heart"></i></a>
                                <Link to="/coursedetails"><i className="fa fa-shopping-cart"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductCard;