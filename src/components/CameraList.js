import React, { Component } from "react";
import Cameras from "./Cameras";
import { Input } from "reactstrap";

class CameraList extends Component {
  state = {
    filterPhrase: ""
    // filterBy: "name"
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    let nameOfCamera = this.props.camerasList
      .filter(camera => camera.name.includes(this.state.filterPhrase))
      .map(camera => (
        <Cameras
          key={camera.id}
          camera={camera}
          addCameraToCart={this.props.addCameraToCart}
        />
      ));
    console.log(nameOfCamera);
    return (
      <div>
        <Input
          className='mb-3 mt-3'
          placeholder='Filter for What You are Looking for Here ...'
          type='text'
          name='filterPhrase'
          onChange={this.handleChange}
        />
        {/* <select name='filterBy' onChange={this.handleChange}>
          <option value='name'>Name</option>
        </select> */}
        {nameOfCamera}
      </div>
    );
  }
}

export default CameraList;
