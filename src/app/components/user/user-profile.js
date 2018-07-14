import React,{Component} from "react";
import classNames from "classnames";

import Education from "./sections/education"
import Portfolio from "./sections/portfolio"


export default class UserProfil extends Component{
	render(){
		return(
			<section style={{background: "#fafafa"}}>
				<div className='container'>
					<div className='wrapper' style={{height:'86px', margin:'20px'}}></div>
					<div className='row justify-content-center align-items-center'>
						<div className=' col-md-12 z-depth-1 bg-white py-1'>
							 <div className="d-flex">
						          <h2 className="text-muted">Personal Information</h2>
					         </div>
					         <hr className="mb-0"/>  <br/>
							<div className="d-block d-md-block">
							 <div className="row">
					            <div className="col-6">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Username" className="_form-control" autoComplete="off" />
					                <i className="fas fa-user _icon "></i>
					              </div>
					            </div>
					             <div className="col-6">        
					              <div className="_field-input _with-icon _underlined">
					              	 <label class="btn-bs-file btn btn-primary ">
					              	 	<span>Upload your photo</span> 
						               <input type="file" style={{display: 'none'}}/>
						            </label>
            
					              </div>
					            </div>
					          </div>
					          <br/>
				              <div className="row">
					            <div className="col-6">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="First Name" className="_form-control" autoComplete="off" />
					                <i className="fas fa-user _icon "></i>
					              </div>
					            </div>
					             <div className="col-6">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Last Name" className="_form-control" autoComplete="off" />
					              </div>
					            </div>
					          </div>
					          <br/>
					          <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
						               <select className='_form-control'>
						               	<option value='' selected disabled>--Select--</option>
						               	<option value='male'>Male</option>
						               	<option value='female'>Female</option>
						               </select>
					                <i className="fas fa-transgender _icon "></i>
					              </div>
					            </div>
					          </div>
					          <br/>
					          <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="date" placeholder="Birthday" className="_form-control" autoComplete="off" />
					                <i className="fas fa-calendar _icon "></i>
					              </div>
					            </div>
					          </div>
					          <br/>
					          <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Expected salary" className="_form-control" autoComplete="off" />
					                <i className="fas fa-hand-holding-usd _icon "></i>
					              </div>
					            </div>
					          </div>
					          <br/>
					          <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Expected work location" className="_form-control" autoComplete="off" />
					                <i className="fas fa-building _icon "></i>
					              </div>
					            </div>
					          </div>
					          <br/>
					          <Education/>
					          <Portfolio/>
					          <button className="btn btn-primary">Submit</button>
							</div>
							
						</div>
					</div>	
				</div>
			</section>
			
			)
	}
} 