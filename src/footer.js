import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="scallop-up"></div>
            <footer class="footer-distributed ">
            

			<div class="footer-left">

				<h3><span>MYWBUT</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">MyWbut @ 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fas fa-map-marker-alt"></i>
					<p><span>E2/4,Netguru Building Block GP </span> Sector V, Salt Lake, Kolkata - 91</p>
				</div>

				<div>
					<i class="fas fa-phone-alt"></i>
					<p>033-40623141 / 9038073878</p>
				</div>

				<div>
					<i class="fas fa-envelope-open-text"></i>
					<p><a href="mailto:admin@mywbut.com">admin@mywbut.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Mywbut.com is the complete online portal for Technical students and colleges of West Bengal.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fab fa-facebook"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
					<a href="#"><i class="fab fa-github"></i></a>

				</div>

			</div>

		</footer>
            </div>
            
         );
    }
}
 
export default Footer;