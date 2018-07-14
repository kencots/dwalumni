import React,{Component} from "react";
import classNames from "classnames";

export default class PortFolio extends Component{
	render(){
		return(
			<section>
				<div className='row justify-content-center align-items-center'>
					<div className=' col-md-12 z-depth-1 bg-white py-1'>
						 <div className="d-flex">
						    <h2 className="text-muted">Portfolio</h2>
					      </div>
					      <hr className="mb-0"/>  <br/>
					      <div className="d-block d-md-block">
					      	<div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="Project name" className="_form-control" autoComplete="off" />
					                <i className="fas fa-project-diagram _icon "></i>
					              </div>
					            </div>
					        </div>
					        <br/>
					        <div className="row">
					            <div className="col-12">        
					              <div className=" _textarea-field-input _with-icon ">
					              <label forHtml='resume' className='text-muted text-bold'><i className="fas fa-building _icon "></i> Your Resume</label>
					                <textarea id='resume' placeholder="Descript" className="_form-control" autoComplete="off"></textarea>
					              </div>
					            </div>
					          </div>
					          <br/>
					        <div className="row">
					            <div className="col-12">        
					              <div className="_field-input _with-icon _underlined">
					                <input type="text" placeholder="GitHub link" className="_form-control" autoComplete="off" />
					                <i className="fas fa-github _icon "></i>
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