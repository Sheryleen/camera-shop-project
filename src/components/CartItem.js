import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col
} from "reactstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardBody>
              <CardTitle>{props.item.name} </CardTitle>
              <CardText>${props.item.price.toFixed(2)}</CardText>
              <CardImg className='img' src={props.item.picture} />
            </CardBody>
          </Col>
          <Col>
            <FontAwesomeIcon
              className='Trash'
              size='lg'
              onClick={() => props.removeCameraFromCart(props.item.id)}
              icon={faTrashAlt}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default CartItem;
