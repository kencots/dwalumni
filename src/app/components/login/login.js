import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      isChecked:false};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({email : event.target.value});
  }
  handleChangePasswd(event){
    this.setState({password:event.target.value});
  }
  handleCheckbox(event){
    this.setState({isChecked:event.target.checked});
    }
  handleSubmit(){
     alert('A name was submitted: ' + this.state.email+' password :'+this.state.isChecked);
     this.setState({email:'',password:'',isChecked:false})
    event.preventDefault();
  }
  render(){
    return(

<section style={{background:"#fafafa"}}>
  <div style={{height : "86px" }}></div> 
        
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-7 z-depth-1 py-3 px-4 bg-white">
        <div className="d-flex  justify-content-between align-items-center">
          <h1 className="text-muted">Sign In</h1>
          <div style={{height: "5px",width: "20px", background: "red"}}></div>
        </div>
          <hr className="mb-0"/>  
          <small className="d-block text-right text-muted">Dumbways.com</small>
        <div className="d-none d-md-block">
          <br/> 
          <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="email" name="email" placeholder="Email" className="_form-control" autoComplete="off" value={this.state.email}  onChange={this.handleChangeEmail}  />
                <i className="fas fa-at _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="password" name="password" placeholder="Password" className="_form-control" autoComplete="off" value={this.state.password}  onChange={this.handleChangePasswd}/>
                <i className="fas fa-lock _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="d-flex justify-content-between">
            <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="checkbox-agree" value={this.state.isChecked} defaultChecked={this.state.isChecked} onChange={this.handleCheckbox}  />

                <label className="custom-control-label" htmlFor="checkbox-agree" style={{fontSize: "0.9rem"}}>Remember me</label>
            </div>
            <input type='submit' className="btn btn-primary" value='Submit' />
          </div>
          </form>
        </div>
       <div className="d-block d-md-none">
          <br/> 
          <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="email" name="email" placeholder="Email" className="_form-control" autoComplete="off" value={this.state.email}  onChange={this.handleChangeEmail}  />
                <i className="fas fa-at _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="password" name="password" placeholder="Password" className="_form-control" autoComplete="off" value={this.state.password}  onChange={this.handleChangePasswd}/>
                <i className="fas fa-lock _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="d-flex justify-content-between">
            <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="checkbox-agree" value={this.state.isChecked} defaultChecked={this.state.isChecked} onChange={this.handleCheckbox}  />

                <label className="custom-control-label" htmlFor="checkbox-agree" style={{fontSize: "0.9rem"}}>Remember me</label>
            </div>
            <input type='submit' className="btn btn-primary" value='Submit' />
          </div>
          </form>
          <button onClick={this.handleSubmit}>Click</button>
        </div>
      </div>
    </div>
  </div>
</section>

      )
  }
}

