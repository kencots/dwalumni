import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import axios from 'axios';

import { connect } from 'react-redux'


import {getToken} from './action'

 class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      isChecked:false,
      status:400
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch= this.handleSwitch.bind(this);  }

  handleChangeUsername(event) {
    this.setState({username : event.target.value});
  }
  handleChangePasswd(event){
    this.setState({password:event.target.value});
  }
  handleCheckbox(event){
    this.setState({isChecked:event.target.checked});
    }
  handleSwitch(){
    location.pathname="/blog";
  }
  handleSubmit(){
    const self=this
    if(this.state.username === "" || this.state.password === "" ){
      alert("Maaf, ada data yang kosong/ belum terisi !!")
    }else{
       axios({
                  method:'post',
                  url:'http://localhost:8000/api/authentication/',
                  headers:{
                    "Content-Type":"application/json"
                  },
                  data:{
                    username: this.state.username,
                    password: this.state.password
                  }
                }).then(function(response){
              const status= response.request.status;
              const token=response.data.token
              self.setState({status:status})
              localStorage.setItem('token',token)
              location.pathname="/"
            }).catch(function(error){
              alert(error);
            })
    }
      !this.state.isChecked ? this.setState({username:'',password:'',isChecked:false}):'';
      event.preventDefault();

  }
  render(){
      console.log(this.state.isChecked)
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
          <form>
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="text" placeholder="Username" className="_form-control" autoComplete="off" value={this.state.username}  onChange={this.handleChangeUsername} />
                <i className="fas fa-user _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="password" placeholder="Password" className="_form-control" autoComplete="off" value={this.state.password}  onChange={this.handleChangePasswd}/>
                <i className="fas fa-lock _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="d-flex justify-content-between">
            <div className="custom-control custom-checkbox">
              <label className="custom-control-label" htmlFor="checkbox-remember" style={{fontSize: "0.9rem"}}>Remember me</label>
               <input type="checkbox" className="custom-control-input" id="checkbox-remember" defaultChecked={this.state.isChecked}  value={this.state.isChecked} onChange={this.handleCheckbox}  />
            </div>
          </div>
          </form>
            <div className="float-right">
           <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
           </div>
        </div>
       <div className="d-block d-md-none">
          <br/> 
          <form>
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="text" placeholder="username" className="_form-control" autoComplete="off" value={this.state.username}  onChange={this.handleChangeUsername}  />
                <i className="fas fa-at _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">        
              <div className="_field-input _with-icon _underlined">
                <input type="password" placeholder="Password" className="_form-control" autoComplete="off" value={this.state.password}  onChange={this.handleChangePasswd}/>
                <i className="fas fa-lock _icon "></i>
              </div>
            </div>
          </div>
          <br/> 
          <div className="d-flex justify-content-between">
            <div className="custom-control custom-checkbox">
                <label className="custom-control-label" htmlFor="checkbox-agree" style={{fontSize: "0.9rem"}}>Remember me</label>
                 <input type="checkbox" className="custom-control-input" id="checkbox-agree" value={this.state.isChecked} defaultChecked={this.state.isChecked} onChange={this.handleCheckbox}  />
            </div>
          </div>
          </form>
          <div className="float-right">
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      )
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.tokenReducer
  }
}
export default connect(mapStateToProps)(Login);
