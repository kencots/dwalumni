import React , {Component} from "react";

export default class Schecdule extends Component{
	render(){
		return(
			<section className="schedules" id="schedules">
			  	<div className="container">
			    	<div className="section-header text-center">
			      		<h2 className="section-title">
			        		Our Batch
			        		<span className="underlined text-primary">Schedules</span>
			      		</h2>
			    	</div>
			    	<div className="section-body">
			      		<div className="row">
			        		<div className="col-sm-4">
			          			<div className="card card-schedule z-depth-2 rounded-0 border-white">
			            			<div className="card-body">
			              				<div className="body-header text-center">
			                				<i className="fas fa-graduation-cap fa-5x text-primary"></i>
			                				<h3>Batch 3</h3>
			              				</div>
			              				<ul className="body-list">
			                				<li>
			                  					<b>Lorem :</b>
			                  					12 Agustus 1999
			                				</li>
			                				<li>
			                  					<b>Ipsum :</b>
			                  					15 Agustus 1999
			                				</li>
			                				<li>
			                  					<b>John Doe :</b>
			                  					10 Participant
			                				</li>
			              				</ul>
			            			</div>
			           				 <div className="card-footer">
			              				<a href="" className="btn btn-primary rounded-0">Registration</a>
			            			</div>
			          			</div>
			        		</div>
			        		<div className="col-sm-4">
			          			<div className="card card-schedule z-depth-2 rounded-0 border-white">
			            			<div className="card-body">
			              				<div className="body-header text-center">
			                				<i className="fas fa-graduation-cap fa-5x text-primary"></i>
			                				<h3>Batch 4</h3>
			              				</div>
			              				<ul className="body-list">
			                				<li>
			                  					<b>Lorem :</b>
			                  					12 Agustus 1999
			                				</li>
			                				<li>
			                  					<b>Ipsum :</b>
			                  					15 Agustus 1999
			                				</li>
			                				<li>
			                  					<b>John Doe :</b>
			                  					10 Participant
			                				</li>
			              				</ul>
			            			</div>
			            			<div className="card-footer">
			              				<a href="" className="btn btn-primary rounded-0">Registration</a>
			            			</div>
			          			</div>
			       		 	</div>
			       	 		<div className="col-sm-4">
			          			<div className="card card-schedule z-depth-2 rounded-0 border-white">
			            			<div className="card-body">
			              				<div className="body-header text-center">
			                				<i className="fas fa-graduation-cap fa-5x text-primary"></i>
			                				<h3>Batch 5</h3>
			              				</div>
			              				<ul className="body-list">
			                				<li>
				                  				<b>Lorem :</b>
				                  				12 Agustus 1999
				               		 			</li>
			                				<li>
				                  				<b>Ipsum :</b>
				                  				15 Agustus 1999
			                				</li>
			                				<li>
				                  				<b>John Doe :</b>
				                  				10 Participant
			                				</li>
			              				</ul>
			            			</div>
			            			<div className="card-footer">
			              				<a href="" className="btn btn-primary rounded-0">Registration</a>
			            			</div>
			          			</div>
			        		</div>
			      		</div>
			    	</div>
			  	</div>
			</section>
		)
	}
}