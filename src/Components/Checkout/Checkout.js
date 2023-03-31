import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const data = location.state;

  console.log(data);

  return (
    <div>
      <Card style={{ margin: "20px", height: "100%" }}>
        <Card.Title className="text-center">
          Review Your Order Details
        </Card.Title>

        <Card style={{ margin: "20px" }}>
          <Card.Img
            variant="top"
            src={data.image}
            style={{ width: "90px", height: "90px" }}
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>Price: ${data.price}</Card.Text>
            <Card.Text>Quantity: {data.quantity}</Card.Text>
            <Card.Text>Total: ${data.total}</Card.Text>
            <Link to="/payment" state={{ data }}>
              <Button variant="primary">Proceed to pay</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card></Card>
      </Card>
    </div>
  );
};

export default Checkout;
