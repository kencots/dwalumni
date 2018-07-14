import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Register extends Component{
	constructor(props) {
    super(props);
    this.state = {
      
      	first_name:'',
      	last_name:'',
      	email:'',
      	username:'',
      	password:'',
      	sign_up_as:false ,
      	isChecked:false,
      };


		this.handleSubmit=this.handleSubmit.bind(this);      
      this.handleChangeFistName=this.handleChangeFistName.bind(this);
      this.handleChangeLastName=this.handleChangeLastName.bind(this);
      this.handleChangeEmail=this.handleChangeEmail.bind(this);
      this.handleChangeUsername=this.handleChangeUsername.bind(this);
      this.handleChangePassword=this.handleChangePassword.bind(this);
      this.handleChangeSignUp=this.handleChangeSignUp.bind(this);
      this.handleCheckbox=this.handleCheckbox.bind(this);
       
  }
  //onchange event handler
  handleChangeFistName(event) {
    this.setState({first_name : event.target.value});
  }
  handleChangeLastName(event) {
    this.setState({last_name : event.target.value});
  }
  	handleChangeEmail(event) {
    this.setState({email : event.target.value});
  }
  	handleChangeUsername(event) {
    this.setState({username : event.target.value});
  }
  	handleChangePassword(event) {
    this.setState({password : event.target.value});
  }
  	handleChangeSignUp(event) {
    this.setState({sign_up_as : event.target.value});
  }
  	handleCheckbox(event){
  	this.setState({isChecked:event.target.checked})
  	console.log(event.target.checked)
  	}

  //submit handler
  	handleSubmit(event){
  		alert("nama: "+this.state.first_name+' '+this.state.last_name+' email :'+this.state.email+' passwd '+this.state.isChecked);
  		this.setState({isChecked:false});
  		event.preventDefault();
  	}

	render(){
		return(

			<section style={{background: "#fafafa"}}>
			<div style={{height : "86px" }}></div> 
        
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
					<form onSubmit={this.handleSubmit}>	
					<div className="row ">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="First Name" className="_form-control" autoComplete="off" value={this.state.first_name} onChange={this.handleChangeFistName} />
								<i className="fas fa-user-alt _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input  _underlined">
								<input type="text" name="search" placeholder="Last Name" className="_form-control" autoComplete="off" value={this.state.last_name} onChange={this.handleChangeLastName}/>
							</div>
						</div>
					</div>
					<br/>	
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Email" className="_form-control" autoComplete="off" value={this.state.email} onChange={this.handleChangeEmail}/>
								<i className="fas fa-at _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Username" className="_form-control" autoComplete="off" value={this.state.username} onChange={this.handleChangeUsername}/>
								<i className="far fa-user _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="password" name="search" placeholder="Password" className="_form-control" autoComplete="off" />
								<i className="fas fa-lock _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input _underlined">
								<input type="password" name="search" placeholder="Retype Password" className="_form-control" autoComplete="off" value={this.state.password} onChange={this.handleChangePassword}/>
							</div>
						</div>
					</div>	
					<br/>
					<div className="row">
						<div className="col-md-12">
							<p className="_text-placeholder">Sign up as :</p>
						</div>
						<div className="col-md-12">
							<div className="_field-input _underlined ">
								<select  className="_form-control" onChange={this.handleChangeSignUp}>
									<option value="" selected='selected' disabled="disabled">--Pilih--</option>
									<option value="0"> Alumni </option>
									<option value="1" > Company Partner</option>
								</select>
							</div>
						</div>
					</div>	
					<br/>		
					<br/>	
					<div className="d-flex justify-content-between">
						<div className="custom-control custom-checkbox">
						  	<input type="checkbox" className="custom-control-input" id="checkbox-agree1" value={this.state.isChecked} onChange={this.handleCheckbox} defaultChecked={this.state.isChecked} />
						  	<label className="custom-control-label" htmlFor="checkbox-agree" style={{fontSize: "0.9rem"}}>I agree with terms and conditions</label>
						</div>
						{this.state.isChecked ? <input type="submit" className="btn btn-primary" value="Submit" /> : <input type="submit" className="btn btn-disable" value="Submit" disabled='disabled' />}
						
					</div>
					</form>
				</div>
					<div className="d-block d-md-none">
					<br/>
					<form onSubmit={this.handleSubmit}>	
					<div className="row ">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="First Name" className="_form-control" autoComplete="off" value={this.state.first_name} onChange={this.handleChangeFistName} />
								<i className="fas fa-user-alt _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input  _underlined">
								<input type="text" name="search" placeholder="Last Name" className="_form-control" autoComplete="off" value={this.state.last_name} onChange={this.handleChangeLastName}/>
							</div>
						</div>
					</div>
					<br/>	
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Email" className="_form-control" autoComplete="off" value={this.state.email} onChange={this.handleChangeEmail}/>
								<i className="fas fa-at _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-12">				
							<div className="_field-input _with-icon _underlined">
								<input type="text" name="search" placeholder="Username" className="_form-control" autoComplete="off" value={this.state.username} onChange={this.handleChangeUsername}/>
								<i className="far fa-user _icon "></i>
							</div>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-6">				
							<div className="_field-input _with-icon _underlined">
								<input type="password" name="search" placeholder="Password" className="_form-control" autoComplete="off" />
								<i className="fas fa-lock _icon "></i>
							</div>
						</div>
						<div className="col-6">				
							<div className="_field-input _underlined">
								<input type="password" name="search" placeholder="Retype Password" className="_form-control" autoComplete="off" value={this.state.password} onChange={this.handleChangePassword}/>
							</div>
						</div>
					</div>	
					<br/>
					<div className="row">
						<div className="col-md-12">
							<p className="_text-placeholder">Sign up as :</p>
						</div>
						<div className="col-md-12">
							<div className="_field-input _underlined ">
								<select  className="_form-control" onChange={this.handleChangeSignUp}>
									<option value="" selected='selected' disabled="disabled">--Pilih--</option>
									<option value="0"> Alumni </option>
									<option value="1" > Company Partner</option>
								</select>
							</div>
						</div>
					</div>	
					<br/>		
					<br/>	
					<div className="d-flex justify-content-between">
						<div className="custom-control custom-checkbox">
						  	<input type="checkbox" className="custom-control-input" id="checkbox-agree" value={this.state.isChecked} onChange={this.handleCheckbox} defaultChecked={this.state.isChecked} />
						  	<label className="custom-control-label" htmlFor="checkbox-agree" style={{fontSize: "0.9rem"}}>I agree with terms and conditions</label>
						</div>
						{this.state.isChecked ? <Link className="btn btn-primary" to='/user-profil'>Submit</Link> : <input type="submit" className="btn btn-disable" value="Submit" disabled='disabled' />}
						
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

			)
	}
}

