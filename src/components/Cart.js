import React from "react";
import CartItem from "./CartItem";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const Cart = props => {
  let arrOfCartItems = props.cart.filter(item => item.inCart);
  let cartItemComponents = arrOfCartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}
      removeCameraFromCart={props.removeCameraFromCart}
    />
  ));

  let totalPrice = arrOfCartItems.reduce(
    (acc, cartItem) => (acc += cartItem.price),
    0
  );

  let taxTotal = totalPrice * 0.086;
  let grandTotal = totalPrice + taxTotal;

  return (
    <div>
      <Container>
        <Row>
          <Col className='cart mt-3'>
            <Card>
              <CardBody>
                <CardTitle>Your Cart</CardTitle>
                <CardText>{cartItemComponents}</CardText>
                <CardSubtitle>Subtotal: ${totalPrice.toFixed(2)}</CardSubtitle>
                <CardText>Tax: ${taxTotal.toFixed(2)}</CardText>
                <CardText>Total: ${grandTotal.toFixed(2)}</CardText>
                <Button color='primary' size='lg' block>
                  Checkout
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
