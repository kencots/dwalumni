import React from "react";
// import "./footer.css";

const Footer = () => {
  "use strict";
  return (
    <footer className="bg-primary pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-12 ">
              <div className="row col-12 justify-content-center">
                <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8" />
              </div>
            <div className="row col-12 justify-content-center text-white">-------</div>
          </div>
          <div className="col-lg col-12 py-2">
            <a href="" className="text-left text-white d-block">
              -------------
            </a> 
            <a href="" className="text-left text-white d-block">
              -------------
            </a> 
            <a href="" className="text-left text-white d-block">
              -------------
            </a> 
          </div>
          <div className="col-lg col-12 py-2">
            <a href="" className="text-left text-white d-block">
              -------------
            </a> 
            <a href="" className="text-left text-white d-block">
              -------------
            </a> 
            <a href="" className="text-left text-white d-block">
              -------------
            </a>  
          </div>
          <div className="col-lg-4 col-12 py-2">
            <div className="d-block">
                <p className="text-white">----------</p>
              </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control bg-primary _footer-input text-white"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                  <button className="btn btn-outline-primary bg-white text-primary font-weight-bold border-1 border-white" type="button">Button</button>
              </div>
            </div> 
          </div>
          <div className="col-lg-3 col-12 py-2" >
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p> 
          </div>
        </div>
      </div>
      <br/>
      <div className="bg-dark">
        <div className="container py-2">
          <p className="mb-0 text-white text-right">&copy; KencotsTeam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;