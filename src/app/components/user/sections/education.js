import React,{Component} from "react";
import classNames from "classnames";

export default class Education extends Component{
	render(){
		return(
			<section>
				<div className='row justify-content-center align-items-center'>
					<div className=' col-md-12 z-depth-1 bg-white py-1'>
						 <div className="d-flex">
						    <h2 className="text-muted">Education</h2>
					      </div>
					      <hr className="mb-0"/>  <br/>
					      <div className="d-block d-md-block">
					      	<div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Scholl/ Education Institution name" className="_form-control" autoComplete="off" />
					                <i className="fas fa-building _icon "></i>
					              </div>
					            </div>
					        </div>
					        <br/>
					        <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Major" className="_form-control" autoComplete="off" />
					                <i className="fas fa-book _icon "></i>
					              </div>
					            </div>
					        </div>
					        <br/>
					        <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Year" className="_form-control" autoComplete="off" />
					                <i className="fas fa-calendar _icon "></i>
					              </div>
					            </div>
					        </div>
					        <br/>
					      </div>
					</div>
				</div>
			</section>
			)
	}
}