import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProductById,
  removeSelectedProduct,
} from "../../redux/Actions/StoreActions";
import Spinner from "react-bootstrap/Spinner";

import "./Product.css";

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productById);
  //console.log(productDetails);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    // /console.log(response.data);

    dispatch(getProductById(response.data));
  };

  useEffect(() => {
    // fetchProductDetais();
    if (id && id != "") fetchProductDetails(id);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  const clickIncrement = () => {
    setQuantity(quantity + 1);
  };

  const clickDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return quantity;
    }
  };

  return (
    <div>
      <Card
        className="itemCard"
        style={{
          margin: "10px",
          marginBottom: "150px",
        }}
      >
        {Object.keys(productDetails).length === 0 ? (
          <div className="loader">
            <div className="loader-content">
              <Spinner
                animation="border"
                role="status"
                className="me-2"
                style={{ top: "15%", left: "50%" }}
              ></Spinner>

              <p className="loader-message">Loading...</p>
            </div>
          </div>
        ) : (
          <>
            <Container>
              <Row xs={1} md={2}>
                <Col>
                  <div>
                    <Card.Title style={{ margin: "20px" }}>
                      {productDetails.title}
                    </Card.Title>
                    <Card.Img
                      style={{
                        alignSelf: "center",
                        margin: "20px",
                        width: "30vh",
                        height: "20vw",
                      }}
                      variant="top"
                      src={productDetails.image}
                    />
                  </div>
                </Col>
                <Col>
                  <div id="productSection">
                    <div style={{ display: "flex", margin: "10px" }}>
                      {" "}
                      <h6 style={{ marginRight: "15px" }}>Price:</h6>
                      <Card.Text style={{}}>${productDetails.price}</Card.Text>
                    </div>
                    <div style={{ display: "flex", margin: "10px" }}>
                      <h6 style={{ marginRight: "15px" }}>Category:</h6>
                      <Card.Text>{productDetails.category}</Card.Text>
                    </div>
                    <div style={{ display: "flex", margin: "10px" }}>
                      <h6 style={{ marginRight: "15px" }}>Description:</h6>
                      <Card.Text>{productDetails.description}</Card.Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "10px",
                        margin: "10px",
                      }}
                    >
                      <h6 style={{ marginRight: "15px" }}>Quantity:</h6>
                      <div
                        style={{
                          width: "300px",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          style={{
                            width: "80px",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <button
                            onClick={clickIncrement}
                            style={{
                              backgroundColor: "inherit",
                              width: "fit-content",
                              height: "fit-content",
                              border: "1px solid black",
                              borderRadius: "2px",
                            }}
                          >
                            +
                          </button>
                          <p>{quantity}</p>
                          <button
                            onClick={clickDecrement}
                            style={{
                              backgroundColor: "inherit",
                              width: "fit-content",
                              height: "fit-content",
                              border: "1px solid black",
                              borderRadius: "2px",
                            }}
                          >
                            -
                          </button>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <h6>Total:</h6>
                          <p style={{ marginLeft: "5px" }}>
                            ${productDetails.price * quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ width: "fit-content", margin: "10px" }}>
                Add to Cart
              </Button>
              <Link
                to="/checkout"
                state={{
                  total: productDetails.price * quantity,
                  quantity,
                  ...productDetails,
                }}
              >
                <Button style={{ width: "fit-content", margin: "10px" }}>
                  Buy
                </Button>
              </Link>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default Product;
