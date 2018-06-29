import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Register extends Component{
	render(){
		return(

			<section style={{background: "#fafafa"}}>
	<div className="container">
		<div className="row justify-content-center align-items-center">
			<div className="col-12 col-lg-7 z-depth-1 py-3 px-4 bg-white">
				<div className="d-flex  justify-content-between align-items-center">
					<h1 className="text-muted">Sign Up</h1>
					<div style={{height: "5px",width: "20px", background: "red"}}></div>
				</div>
					<hr className="mb-0"/>	
					<small className="d-block text-right text-muted">Dumbways.com</small>
				<div className="d-none d-md-block">
					<br/>	
					<div className="row ">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="First Name" className="_form-control"/>
								<i className="fas fa-user-alt _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input  _underlined">
								<input type="text" name="search" placeholder="Last Name" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>	
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Email" className="_form-control"/>
								<i className="fas fa-at _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Username" className="_form-control"/>
								<i className="far fa-user _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Password" className="_form-control"/>
								<i className="fas fa-lock _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="Retype Password" className="_form-control"/>
							</div>
						</div>
					</div>	
					<br/>	
					<br/>	
					<div className="d-flex justify-content-between">
						<div className="custom-control custom-checkbox">
						  	<input type="checkbox" className="custom-control-input" id="checkbox-agree"/>
						  	<label className="custom-control-label" for="checkbox-agree" style={{fontSize: "0.9rem"}}>I agree with terms and conditions</label>
						</div>
						<button className="btn btn-primary">Submit</button>
					</div>
				</div>
				<div className="d-block d-md-none">
					<br/>	
					<div className="row ">
						<div className="col-12">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="First Name" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input  _underlined">
								<input type="text" name="search" placeholder="Last Name" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>	
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="Email" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="Username" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="Password" className="_form-control"/>
							
							</div>
						</div>
					</div>	
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _underlined">
								<input type="text" name="search" placeholder="Retype Password" className="_form-control"/>
							</div>
						</div>
					</div>
					<br/>	
					<br/>	
					<div className="d-flex justify-content-between">
						<div className="custom-control custom-checkbox">
						  	<input type="checkbox" className="custom-control-input" id="checkbox-agree"/>
						  	<label className="custom-control-label" for="checkbox-agree" style={{fontSize: "0.9rem"}}>I agree with terms and conditions</label>
						</div>
						<Link className="btn btn-primary" to="/">Submit</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

			)
	}
}

