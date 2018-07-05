import React , {Component} from "react";
import {connect} from "react-redux";
import Link from "pawjs/src/components/link";

class Header extends Component{

  state = {
    offsetTop : window.scrollY,
    display : "",
    token : localStorage.getItem('token'),
  }
  constructor(props){
    super(props)
     this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleSignOut(event){
    localStorage.clear();
    console.log('token dihapus');
    this.setState({token:null});
    window.location.pathname("/login")
    event.preventDefault();
  }
  render(){

  window.onscroll = (event)=>{
      const offsetTop = window.scrollY;
      if (this.state.offsetTop < offsetTop && offsetTop > 86 ) {
        this.setState({
          display : "active"
        })

      }else{
        this.setState({
          display : ""
        })
      }
      this.setState({
        offsetTop : offsetTop
      })
  }
  return (

    <nav ref="header"  className={`navbar _header-scroll fixed-top ${this.state.display}  navbar-expand-lg navbar-light bg-white z-depth-1`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8" />
        </Link>
        <button className="navbar-toggler" onClick = {()=> {this.handle(this.refs)}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle font-weight-bold px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Programs
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
              </div>
            </li>
            <li className="nav-item">
            {this.state.token==null ? (
                 <Link className="nav-link font-weight-bold px-3" to="/login">
                  About
                  </Link>
              ):(
                 <Link className="nav-link font-weight-bold px-3" to="/profil">
                  About
                  </Link>
              )}
             
            </li>
            <li className="nav-item">
             {this.state.token==null ? (
                 <Link className="nav-link font-weight-bold px-3" to="/login">
                  Blog
                  </Link>
              ):(
                 <Link className="nav-link font-weight-bold px-3" to="/blog">
                  Blog
                  </Link>
              )}
            </li>
            
            <li className="nav-item">
              <Link className="nav-link font-weight-bold px-3" to="/">FAQs</Link>
            </li>
            <li className="nav-item">
              {this.state.token == null ? (
                   <Link className="nav-link font-weight-bold px-3" to="/login">
                    Sign In
                  </Link>
                ):(
                   <a href="/login">  
                   <span className="nav-link font-weight-bold px-3" onClick={this.handleSignOut}>Sign Out</span>
                   </a>
                )}
            </li>
            <li className="nav-item ">
              <Link className="nav-link bg-primary font-weight-bold text-white px-4" to="/register">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
  }
};

export default Header;
