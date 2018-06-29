import React, { Component } from "react";
import Picture from "pawjs/src/components/picture/picture";

export default class ProgressiveImage extends Component {
  render() {
    return (
      <div className="mt-4">
        <Picture
          pictureClassName="d-inline-block w-100 my-4"
          image={url('https://upload.wikimedia.org/wikipedia/id/thumb/c/c2/LOGO_KABUPATEN_KEBUMEN.png/1200px-LOGO_KABUPATEN_KEBUMEN.png')}
          alt="Small Image"
          imgClassName="w-100"
        />
      </div>
    );
  }
}
