import React, {Component} from "react";
import Fold from "pawjs/src/components/fold";
import ReactLogo from "src/resources/images/mario-large.png";
import SmallImage from "src/resources/images/mario-large.png?sizes=100w+200w+400w+800w&placeholder";
import Picture from "pawjs/src/components/picture/picture";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    );
  }
} 