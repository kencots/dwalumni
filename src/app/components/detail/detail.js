import React,{Component} from "react";
import classNames from "classnames";


export default class Detail extends Component{
	render(){
		return(

			<div className="container">
				<div style={{height : "86px" }}></div> 
        
				<div className="row">
					<div className="col-md-12" >
						<div className="bg-primary px-4 py-md-5 m-0">
							<div className="d-flex justify-content-between align-items-center _wrapper-header-profil ">
								<div className="d-flex align-items-center">
									<div className="mr-3">
										<img src="https://s3.envato.com/files/193256165/Preview.jpg" width="200" height="200" className="rounded-circle "/>
									</div>
									<div >
										<h2 className="text-white m-0 p-0">Hilmi Khoirulloh</h2>
										<h2 className="m-0 p-0 text-white"><small>UI/UX Designer</small></h2>
									</div>
								</div>
								<button className="btn btn-white z-depth-1 bg-white text-primary">
									 <b>Hire Me</b> 
								</button>
							</div>
							<div className="py-3 d-block d-md-none">
								<div className="d-flex justify-content-between align-items-center ">
									<div className="d-flex align-items-center">
										<div className="mr-3">
											<img src="https://s3.envato.com/files/193256165/Preview.jpg" width="100" height="100" className="rounded-circle "/>
										</div>
										<div >
											<h5 className="text-white m-0 p-0">Hilmi Khoirulloh</h5>
											<h5 className="m-0 p-0 text-white"><small>UI/UX Designer</small></h5>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-end">
									<button className="btn btn-white z-depth-1 bg-white text-primary">
										 <b>Hire Me</b> 
									</button>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="row" >
					<div className="col-md-3 ">
						<div className="col z-depth-2 pt-5 pb-4">	
	
							<h5 className="row align-items-center px-3 mt">
								<b className="pr-2">Basic</b> 
								<div className="bg-dark mt-2 col" style={{height: "2px"}} ></div>
							</h5>
							<b className="d-block">Gendre : Male</b>
							<b className="d-block">BirthDay : 9 March 2019</b>
							<b className="d-block">ExpectedSalery : IDR 20 Jt</b>
							<b className="d-block">Expected Location : JKT	</b>

							<h5 className="row align-items-center px-3 mt-1">
								<b className="pr-2 ">About Me</b>
								<div className="bg-dark mt-2 col" style={{height: "2px"}} ></div>
							</h5>
							<p style={{fontSize: "0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
							
							<h5 className="row align-items-center px-3">
								<b className="pr-2 ">Education</b>
								<div className="bg-dark mt-2 col" style={{height: "2px"}} ></div>
							</h5>
							<div className="row">
								<div className="col-4"></div>
								<div className="col-8">
									<h6 className="m-0">Univetsitas Indonesia</h6>
									<b className="m-0">Bacholor Degeroo, Information Technology</b>
									<p style={{fontSize: "0.9rem"}}>2017 - 2018</p>
								</div>
							</div>

							<h5 className="row align-items-center px-3">
								<b className="pr-2 ">Experience</b>
								<div className="bg-dark mt-2 col" style={{height: "2px"}} ></div>
							</h5>
							<div className="row">
								<div className="col-4"></div>
								<div className="col-8">
									<h5 className="m-0">UI/UX Designer</h5>
									<b className="m-0">Bacholor Degeroo, Information Technology</b>
									<small className="d-block">work 2017- Now</small>
									<small className="d-block">java view</small>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-9">

						<section>
							<div className="container z-depth-3">
								<div className="section-body">
									<div className="row">
								<div className="col-md-2">
									<p className=" d-flex justify-content-center align-items-center">
										<i className=" big-icon fas fa-info-circle " style={{fontSize:"100px",color:"#2980b9"}}></i>
									</p>
								</div>
								<div className="col-md-10 d-flex justify-content-center align-items-center ">
									<p>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
									</p>
								</div>
							</div>
								</div>
							</div>
						</section>
							<ul className="nav nav-tabs" style={{margin:0}}>
								  <li>
								    <a className="nav-link active-tab" href="#"><i className="fab fa-react"></i> React Native</a>
								  </li>
								  <li className="nav-item ">
								    <a className="nav-link inactive-tab" href="#" ><i className="fab fa-python"></i> Python</a>
								  </li>
								</ul>
							<div className="container border border-light z-depth-1 mr-md-auto" style={{margin: "0px 0 20px 0"}}>

								<section  className="pb-0">
				<div className="container  px-0">
					<div className="section-header pb-0">
						<div className="section-title">
							<h4> 1. Portfolio </h4>
						</div>
					</div>
					<div className="section-body py-0" style={{marginTop:"-50px"}}>
					<div className="row">
						<div className="col-md-4 fluid-div">
							
							<section>
								<div className="container">
									<div className="section-body">
												
												<div className="card bg-grey item-left">
													<div className="card-body">
														<h5 className="card-title text-bold">Dumbways App</h5>
														<p className="card-subtitle text-note">
															Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
														</p>
														<a href="#" className="card-link">
															<i className="fab fa-github card-icon-link"></i>
														</a>
													</div>
												</div>

									</div>
								</div>
							</section>

						</div>
						<div className="col-md-4 fluid-div">
							
							<section>
								<div className="container">
									<div className="section-body">
												
												<div className="card bg-grey item-left">
													<div className="card-body">
														<h5 className="card-title text-bold">Dumbways App</h5>
														<p className="card-subtitle text-note">
															Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
														</p>
														<a href="#" className="card-link">
															<i className="fab fa-github card-icon-link"></i>
														</a>
													</div>
												</div>

									</div>
								</div>
							</section>
							
						</div>
						<div className="col-md-4 fluid-div">
							
							<section>
								<div className="container">
									<div className="section-body">
												
												<div className="card bg-grey item-left">
													<div className="card-body">
														<h5 className="card-title text-bold">Dumbways App</h5>
														<p className="card-subtitle text-note">
															Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
														</p>
														<a href="#" className="card-link">
															<i className="fab fa-github card-icon-link"></i>
														</a>
													</div>
												</div>

									</div>
								</div>
							</section>
							
						</div>
			
			
			</div>
		</div>
	</div>
</section>
<section>
	<div className="container" style={{margin:0,padding:"10px"}}>
		<div className="section-header">
			<div className="section-title">
				<h4>2. Exam Result</h4>
			</div>
		</div>
		<div className="section-body">
			<div className="row">
				<div className="col-md-7" style={{margin:0,padding:0}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<section className="px-0 py-0">
									<div className="container">
										<div className="section-body">

											<div className="card">
												<div className="card-body container">
													<div className="row">
														<div className="col-md-12">
															<p className="card-title text-grey">Overall Score by <span className="text-bold">DumbWays</span></p>
														</div>
													</div>
													<div className="row">
														<div className="col-md-4 text-center ">
															<div className=" position-relative">
															<i className="big-icon text-danger fas fa-star"></i>
															<span className="d-flex  justify-content-center align-items-center  text-bold text-white position-absolute" style={{left: 0, right: 0, top: 0,bottom: 0,paddingTop: "10px", fontSize: "1.3rem"}}>
															4,7
															</span>
															</div>
															<div className="container"><p>Of 5 Stars</p></div>
															
														</div>
														<div className="col-md-8">
															<div className="container">
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>UI</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>UX</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Func</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Code</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																
															</div>

														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

							</div>
						</div>
						<div className="row">
							<div className="col-md-12">

								<section className="px-0 py-0">
									<div className="container">
										<div className="section-body">
											<div className="card">
												<div className="card-body">
													<p className="text-bold card-title">Exam Video Result</p>
														<iframe className="w-100 h-100" src="https://www.youtube.com/embed/8XVATypXio0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
												</div>
												<div className="card-body">
													<p className="text-bold card-title">Exam Interview Result</p>
													<iframe className="w-100 h-100" src="https://www.youtube.com/embed/8XVATypXio0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
												</div>
												</div>

											</div>
										</div>
								</section>

							</div>
						</div>
						<section className="py-0">
								<div className="container">
									<div className="section-body">
										<div className="row text-center">
												<div className="col-md-12">
													<div className="card">
														<div className="card-body">
															<h5 className="card-title text-bold">
																Exam Repo URL <i className=" text-primary med-icon fab fa-github"></i>
															</h5>
														</div>
													</div>

												</div>
											</div>
									</div>
								</div>
							</section>
					</div>
				</div>

				<div className="col-md-5 fluid-div">
					<div className="container">
						<div className="row">
							<div className="col-md-12 fluid-div">
								<section className="pt-0 py-0">
									<div className="container fluid-div">
										<div className="section-body">
											<div className="card">
												<div className="card-body">
													<h4>React Native Detailed Skill</h4>
													<div className="container">
														<div className="row">
															<div className="col-md-12">

																<div className="container fluid-div" >
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Component</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Props</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>State</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Styling</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>React Navigation</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Nativebase</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>Redux</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																<div className="d-flex">
																	<div className="mr-auto">
																		<p>REST API</p>
																	</div>
																	<div className="ml-auto">
																		<i className="text-primary fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																		<i className="text-dark fas fa-star"></i>
																	</div>
																</div>
																
															</div>

															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="py-0">
	<div className="container fluid-div">
		<div className="section-header py-0">
			<div className="section-title">
				<h3>3. Articles</h3>
			</div>
		</div>
		<div className="section-body py-0 " style={{marginTop:"-50px"}}>
			<div className="row">
				<div className="col-md-4 px-0 ">
					<section>
						<div className="container">
							<div className="section-body">
								<div className="card z-depth-1">
									<img className="card-img-top" src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/01/14/102337799-robert-shiller.530x298.jpg"/>
									<div className="card-body">
										<p className="text-bold card-title">Article 1</p>
										<p className="card-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="col-md-4 px-0">
					<section>
						<div className="container">
							<div className="section-body">
								<div className="card z-depth-1">
									<img className="card-img-top" src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/01/14/102337799-robert-shiller.530x298.jpg"/>
									<div className="card-body">
										<p className="text-bold card-title">Article 1</p>
										<p className="card-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="col-md-4 px-0">
					<section>
						<div className="container">
							<div className="section-body">
								<div className="card z-depth-1">
									<img className="card-img-top" src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/01/14/102337799-robert-shiller.530x298.jpg"/>
									<div className="card-body">
										<p className="text-bold card-title">Article 1</p>
										<p className="card-text">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="pt-0">
	<div className="container">
		<div className="section-header">
			<div className="section-title">
				<h4>4. Certificate</h4>
			</div>
		</div>
		<div className="section-body">
			<div className="row">
				<div className="col-md-4">
					<img src="https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png " className="img-fluid"/>
				</div>
				<div className="col-md-4">
					<img src="https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png" className="img-fluid"/>
				</div>
			</div>
		</div>
	</div>
</section>

							</div>
					</div> 	
				</div>
			</div>
	
			)
	}
}