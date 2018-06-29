import  React , {Component} from 'react';
import classNames from "classnames";

export default class HiringPatner extends Component {
	render(){
		return(
			<section className="partner">
			  	<div className="container" id="partner">
			    	<div className="section-header">
			      		<h2 className="section-title text-center">Hiring Partner</h2>
			    	</div>
			    	<div className="section-body">
			      		<div className="owl-carousel owl-theme row justify-content-center align-items-center">
			        		<div className="col-12 col-md-3 partner-item">
			          			<img src="http://pngimg.com/uploads/google/google_PNG19644.png" alt="" className="partner-image" />
			        		</div>
			        		<div className="col-12 col-md-3 partner-item">
			          			<img src="https://cdn-images-1.medium.com/max/1600/1*LKzOm8aR2dMYUu8ZNvITFg.png" alt="" className="partner-image" />
			        		</div>
			        		<div className="col-12 col-md-3 partner-item">
			          			<img src="https://vignette.wikia.nocookie.net/logopedia/images/d/dd/Grab_logo.png/revision/latest?cb=20160204065717" alt="" className="partner-image" />
			        		</div>
			      		</div>
			    	</div>
			  	</div>
			</section>
		)
	}
}