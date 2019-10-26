import React, { Component } from "react";
import TopNav from "./components/TopNav";
import { Container, Row, Col } from "reactstrap";
import CameraList from "./components/CameraList";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import axios from "axios";
import './App.css';


class App extends Component {
  state = {
    cameras: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/cameras")
      .then(res => this.setState({ cameras: res.data }));
  }

  addCameraToCart = id => {
    axios
      .patch(`http://localhost:8082/api/cameras/${id}/add`)
      .then(res => {
        let updateCameraList = this.state.cameras.map(camera => {
          if (camera.id === id) {
            return { ...camera, inCart: true };
          } else {
            return camera;
          }
        });
        this.setState({ cameras: updateCameraList });
      });
  };

  removeCameraFromCart = id => {
    axios
      .patch(`http://localhost:8082/api/cameras/${id}/remove`)
      .then(res => {
        let updatedCameraList = this.state.cameras.map(camera => {
          if (camera.id === id) {
            return { ...camera, inCart: false };
          } else {
            return camera;
          }
        });
        this.setState({ cameras: updatedCameraList });
      });
  };

  render() {
    return (
      <div className='App'>
        <TopNav />
        {/* <Main />
        // <Footer /> */}
        <Container>
          <Row>
            <Col xs={{ size: 8 }}>
              <CameraList
                camerasList={this.state.cameras}
                addCameraToCart={this.addCameraToCart}
              />
            </Col>
            <Col>
              <Cart cart={this.state.cameras}
                removeCameraFromCart={this.removeCameraFromCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
