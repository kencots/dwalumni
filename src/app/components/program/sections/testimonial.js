import React , {Component } from "react";

export default class Testimonial extends Component {
	render(){
		return (
			<section class="bg-grey testimonial">
			  	<div class="container">
			    	<div class="section-header">
				      	<h2 class="section-title">
				        	Apa Kata <span class="text-primary">Mereka?</span>
				      	</h2>
			    	</div>
			    	<div class="section-body">
			      		<div class="owl-carousel owl-theme">
			        		<div class="testimonial-item">
			          			<div class="testimonial-body">
				            		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				            		<span class="written">
				              			Dicky Indra Asmara
				              			<span class="job">Web Designer</span>
				            		</span>
			          			</div>
			          			<div class="testimonial-image">
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