import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import ReactStars from 'react-stars'

const Cameras = props => {
  let { id, name, price, picture, rating, onSale} = props.camera;
  return (
    <Card className='mb-3'>
      <Row>
        <Col xs={{ size: 3 }}>
          <CardImg
            style={{ width: 200 }}
            top
            src={picture}
            alt='Card image cap'
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>${price.toFixed(2)}</CardText>
            <p className = 'sale'>{onSale && 'Sale'}</p>
            <CardText><ReactStars edit={false} count={5} value={rating} /></CardText>
            {/* <ReactStars edit={false} count={5} value={rating}/> */}
            <Button color='primary' onClick={() => props.addCameraToCart(id)}>
              Add To Cart
            </Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default Cameras;
