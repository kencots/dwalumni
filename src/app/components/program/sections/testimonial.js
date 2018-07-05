import React , {Component } from "react";

export default class Testimonial extends Component {
	render(){
		return (
			<section className="bg-grey testimonial">
			  	<div className="container">
			    	<div className="section-header">
				      	<h2 className="section-title">
				        	Apa Kata <span className="text-primary">Mereka?</span>
				      	</h2>
			    	</div>
			    	<div className="section-body">
			      		<div className="owl-carousel owl-theme">
			        		<div className="testimonial-item">
			          			<div className="testimonial-body">
				            		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				            		<span className="written">
				              			Dicky Indra Asmara
				              			<span className="job">Web Designer</span>
				            		</span>
			          			</div>
			          			<div className="testimonial-image">
			            			<img src="http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg" alt="" />
			          			</div>
			        		</div>
			        	</div>
			      	</div>
			    </div>
			</section>
		)
	}
}