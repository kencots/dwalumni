import React,{Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Profil extends Component{
	render(){
		return(
	<div className="bg-grey pb-4">
	<div className="bg-white" style={{height : "55px" }}></div> 

				<section class="pb-0 bg-white"  >
					<div class="container pb-2" >
						<ul class="nav nav-underlined">
						  	<li class="nav-item " >
						    	<a class="nav-link active" href="#" style={{borderRadius : 0}}>Free</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" href="#">Hired</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" href="#">All</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link disabled" href="#">Disabled</a>
						  	</li>
						</ul>
					</div>
				</section>


		<div className="container bg-white" style={{marginTop:"50px"}}>
				<div className=" p-4">
					<div className="row align-items-center pt-3 pb-4">
						
						<div className="col-lg-8 col-12">
							<div className="_field-input _with-icon _underlined">
				                <input type="email" name="search" placeholder="Search" className="_form-control"/>
				                <i className="fas fa-search _icon "></i>
				            </div>
						</div>
						<div className="col-lg-4 col-12 row justify-content-end">
							<div className="dropdown px-1">
								<small>
								  	<a style={{cursor: "pointer"}} className="font-weight-bold text-dark dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    	Skills
								  	</a>
								  	<div className="dropdown-menu p-0 bg-menu">
								  		<form>	
									  		<label className="dropdown-item px-2" for="skill1">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="skill1" name="skill" className="custom-control-input"/>
										  			<label className="custom-control-label mb-0 pl-1" for="skill1" >React Native</label>
												</div>
											</label>
											<label className="dropdown-item px-2 mb-0" for="skill2">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="skill2" name="skill" className="custom-control-input" />
										  			<label className="custom-control-label mb-0 pl-1" for="skill2" >Python</label>
												</div>
											</label>
										</form>
									</div>
							  	</small>
							</div> 
							<div className="dropdown px-1">
								<small>
								  	<a style={{cursor: "pointer"}} className="font-weight-bold text-dark dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   		Expacted Location
								  	</a>
								  	<div className="dropdown-menu p-0 bg-menu" >
								  		<form>	
									  		<label className="dropdown-item px-2" for="location1">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="location1" name="location" className="custom-control-input" />
										  			<label className="custom-control-label mb-0 pl-1" for="location1" >React Native</label>
												</div>
											</label>
											<label className="dropdown-item px-2 mb-0" for="location2">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="location2" name="location" className="custom-control-input" />
										  			<label className="custom-control-label mb-0 pl-1" for="location2" >Python</label>
												</div>
											</label>
										</form>
									</div>
							  	</small>
							</div> 
							<div className="dropdown px-1">
								<small>
								  	<a style={{cursor: "pointer"}} className="font-weight-bold text-dark dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    	Expacted Salary
								  	</a>

								  	<div className="dropdown-menu p-0 bg-menu">
									  	<form>	
									  		<label  className="dropdown-item px-2" for="salary1">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="salary1" name="salary" className="custom-control-input"/>
										  			<label className="custom-control-label mb-0 pl-1" for="salary1" >React Native</label>
												</div>
											</label>
											<label className="dropdown-item px-2 mb-0" for="salary2">	
										  		<div className="custom-control d-block custom-radio custom-control-inline align-items-center py-0 " aria-labelledby="dropdownMenuButton" >
										  			<input type="radio" id="salary2" name="salary" className="custom-control-input" />
										  			<label className="custom-control-label mb-0 pl-1" for="salary2" >Python</label>
												</div>
											</label>
										</form>
									</div>
							  	</small>
							</div> 
						</div>
					</div>
					<div className="row">
				
						<div className="col-lg-4 col-12 " >
							<div className="card"	>
								<div className="thumbnail-responsive">
							  		<img  src="https://s3.envato.com/files/193256165/Preview.jpg"  style={{width: "100%"}}/>
							  	</div>
							  	<div className="card-body p-0 top-margin" >
							  		<div className="px-4 tranparent-bg-black">
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  		</div>
							    	<div className="p-3">
								    	<div >
									    	<h5 className="card-title m-0">Lorem ipsum</h5>
									    	<small>dumbways.com</small>
									    	<p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
							    		</div>
							    		<div>
							    			<small><b>More Skills</b></small>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">Programing Language</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-blue-circle text-center text-white circle-small my-1 mr-1"><i className="fab fa-python"></i></p>
							    					<small><b>Python</b></small>
							    				</div>
							    			</div>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">FrameworkLibrary</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-info text-center text-white circle-small my-1 mr-1"><i className="fab fa-react"></i></p>
							    					<small>	<b>	React Native</b></small>
							    				</div>
							    			</div>
							    		</div>
							    	</div>
							    	 <Link className="btn btn-primary w-100 rounded-0" to="/detail">
						              	Detail Alumni
						              </Link>
							  	</div>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="card"	>
								<div className="thumbnail-responsive">
							  		<img  src="https://s3.envato.com/files/193256165/Preview.jpg"  style={{width: "100%"}}/>
							  	</div>
							  	<div className="card-body p-0 top-margin">
							  		<div className="px-4 tranparent-bg-black">
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  		</div>
							    	<div className="p-3">
								    	<div >
									    	<h5 className="card-title m-0">Hilmi Khoirulloh</h5>
									    	<small>dumbways.com</small>
									    	<p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
							    		</div>
							    		<div>
							    			<small><b>More Skill</b></small>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">Programing Language</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-blue-circle text-center text-white circle-small my-1 mr-1"><i className="fab fa-python"></i></p>
							    					<small><b>Python</b></small>
							    				</div>
							    			</div>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">FrameworkLibrary</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-info text-center text-white circle-small my-1 mr-1"><i className="fab fa-react"></i></p>
							    					<small>	<b>	React Native</b></small>
							    				</div>
							    			</div>
							    		</div>
							    	</div>
							    	 <Link className="btn btn-primary w-100 rounded-0" to="/detail">
						              	Detail Alumni
						              </Link>
							  	</div>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="card"	>
								<div className="thumbnail-responsive">
							  		<img  src="https://s3.envato.com/files/193256165/Preview.jpg"  style={{width:"100%"}}/>
							  	</div>
							  	<div className="card-body p-0 top-margin">
							  		<div className="px-4 tranparent-bg-black" >
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  			<div className="row justify-content-between">
							  				<div>
							  					<b className="text-white">-----</b>
							  				</div>
							  				<div>
							  					<b className="text-white">-----</b>
							  				
							  				</div>

							  			</div>
							  		</div>
							    	<div className="p-3">
								    	<div >
									    	<h5 className="card-title m-0">Hilmi Khoirulloh</h5>
									    	<small>dumbways.com</small>
									    	<p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
							    		</div>
							    		<div>
							    			<small><b>More Skill</b></small>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">Programing Language</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-blue-circle text-center text-white circle-small my-1 mr-1"><i className="fab fa-python"></i></p>
							    					<small><b>Python</b></small>
							    				</div>
							    			</div>
							    			<div className="row align-items-center">
							    				<div className="col-7">
							    					<h6 class="h6-size">FrameworkLibrary</h6>
							    				</div>
							    				<div className="row col-5 align-items-center  p-0">
							    					<p className="bg-info text-center text-white circle-small my-1 mr-1"><i className="fab fa-react"></i></p>
							    					<small>	<b>	React Native</b></small>
							    				</div>
							    			</div>
							    		</div>
							    	</div>
							    	 <Link className="btn btn-primary w-100 rounded-0" to="/detail">
						              	Detail Alumni
						              </Link>
							  	</div>
							</div>
						</div>
					</div>

				</div>
				<div className="pb-3 px-4">
					<nav aria-label="Page navigation example">
					  <ul className="pagination">
					    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
					    <li className="page-item"><a className="page-link" href="#">1</a></li>
					    <li className="page-item"><a className="page-link" href="#">2</a></li>
					    <li className="page-item"><a className="page-link" href="#">3</a></li>
					    <li className="page-item"><a className="page-link" href="#">Next</a></li>
					  </ul>
					</nav>
				</div>

				
	
</div>
</div>

			)
	}
}