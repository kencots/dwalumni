import React , {Component} from "react";

export default class Team extends Component {
	render(){
		return(
			<section className="bg-grey team" id="team">
				<div className="container">
				    <div className="section-header text-center">
				      	<h2 className="section-title">Our great <span className="underlined text-primary">team</span></h2>
							    </div>
							    <div className="section-body">
							      	<div className="row owl-carousel owl-theme">
							        	<div className="col-12 col-md-4 team-item">
							          		<div className="item-image">
							           	 		<img src="http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg" />
							          		</div>
							          		<div className="item-body">
							            		<h3 className="name">Dicky Indra Asmara</h3>
							            		<span className="job">Web Developers</span>
							          		</div>
							          		<div className="item-sm">
							            		<a href="#"><i className="fab fa-github"></i></a>
							            		<a href="#"><i className="fab fa-facebook"></i></a>
							            		<a href="#"><i className="fab fa-linkedin"></i></a>
							          		</div>
							        	</div>
							        	<div className="col-12 col-md-4 team-item">
							          		<div className="item-image">
							            		<img src="http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg" />
							          		</div>
							          		<div className="item-body">
							            		<h3 className="name">Dicky Indra Asmara</h3>
							            		<span className="job">Web Developers</span>
							          		</div>
							          		<div className="item-sm">
							            		<a href="#"><i className="fab fa-github"></i></a>
							            		<a href="#"><i className="fab fa-facebook"></i></a>
							            		<a href="#"><i className="fab fa-linkedin"></i></a>
							          		</div>
							        	</div>
							        	<div className="col-12 col-md-4 team-item">
							          		<div className="item-image">
							            		<img src="http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg" />
							          		</div>
							          		<div className="item-body">
							            		<h3 className="name">Dicky Indra Asmara</h3>
							            		<span className="job">Web Developers</span>
							          		</div>
									        <div className="item-sm">
									            <a href="#"><i className="fab fa-github"></i></a>
									            <a href="#"><i className="fab fa-facebook"></i></a>
									            <a href="#"><i className="fab fa-linkedin"></i></a>
									        </div>
							        	</div>
							      	</div>
							    </div>
							</div>
						</section>

		)
	}
}