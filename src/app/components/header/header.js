import React from "react";
import {connect} from "react-redux";
import Link from "pawjs/src/components/link";

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white z-depth-1">
      <div class="container">
         <Link className="m-2 nav-link" to="/">
            <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8" />
         </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle font-weight-bold px-3" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Programs
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
              </div>
            </li>
            <li class="nav-item">
             <Link className="nav-link font-weight-bold px-3" to="/profil">
              About
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold px-3" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold px-3" href="#">FAQs</a>
            </li>
            <li class="nav-item">
            <Link
              className="nav-link font-weight-bold px-3" to="/login">
              Sign In
            </Link>
            </li>
            <li class="nav-item ">
            <Link
              className="nav-link bg-primary font-weight-bold text-white px-4" to="/register">
              Sign UP
            </Link>
            </li>
          </ul> 
        </div>
      </div>
    </nav>

  );
};

export default connect(state => { return {url: state.router.location.pathname}; })(Header);
