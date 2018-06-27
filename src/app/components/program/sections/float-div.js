import React , {Component } from 'react'

export default class FloatDiv extends Component {
	render(){
		return(
			<section>
				<div className=" container card overlay-card" style={{marginTop : -80 }}>
				    <div className="section-header">
				      	<div className="section-title text-center">
				        	Whats our student
				        	<span className="underlined text-primary">achieve?</span>
				      	</div>
				    </div>
				    <div className="section-body">
				      	<div className="row " >
					        <div className="col-md-4 col-sm-12 col-xs-12">
					            <div className="container">
					                <div className=" row justify-content-center">
					                	<div className="col-md-4 col-12">
					                 		<p className="primary-icon text-center text-md-left"><i className="fas fa-user-graduate"></i></p>
					              		</div>
					             		<div >
					                		<p ><h3 className="text-highlight-bold text-center text-md-left">+100</h3></p>
					                		<p className="text-center text-md-left">Lorem Ipsum adalah contoh</p>
					              		</div>
					            	</div>
					          	</div>
					        </div>
					        <div className="col-md-4">
					        	<div className="container">
					          		<div className="row align-items-center" >
					            		<div className="col-md-4">
					              			<p className="primary-icon"><i className="fas fa-briefcase"></i></p>
					            		</div>
					            		<div className="col-md-8">
					              			<p ><h3 className="text-highlight-bold">78%</h3></p>
					          				<p>Lorem Ipsum adalah contoh</p>
					            		</div>
					          		</div>
					        	</div>
					        </div>
					        <div className="col-md-4">
					          	<div className="container">
					            	<div className="row align-items-center" >
					              		<div className="col-md-4">
					                 		<p className="primary-icon"><i className="fas fa-donate"></i></p>
					              		</div>
					              		<div className="col-md-8">
					                 		<p ><h3 className="text-highlight-bold">IDR 8jt</h3></p>
					                  		<p>Lorem Ipsum adalah contoh</p>
					              		</div>
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