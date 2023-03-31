import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "../../redux/Actions/StoreActions";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const categories = useSelector((state) => state.categories);
  const productsByCategory = useSelector((state) => state.productsByCategory);
  const keys = Object.values(categories);
  const state = useLocation();
  const navigate = useNavigate();
  const userName = state.state.uName;
  // console.log(state.state.uName);

  //console.log(keys);
  //console.log(productsByCategory);
  const keys1 = Object.values(productsByCategory);
  console.log(keys1);

  const allItems = Object.values(allProducts);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?limit=9")
      .catch((err) => {
        console.log(err);
      });
    dispatch(getAllProducts(response.data));
  };

  const clickViewMore = async () => {
    navigate("/allProducts");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <p
        style={{
          margin: "10px",
          fontStyle: "italic",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        Welcome,{userName}
      </p>
      <div>
        <Carousel
          style={{
            marginBottom: "50px",
          }}
          id="corousel"
        >
          <Carousel.Item>
            <img
              style={{}}
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/62d1db714bbec85e.jpg?q=50"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide labe</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/62d1db714bbec85e.jpg?q=50"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/62d1db714bbec85e.jpg?q=50"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*  <div>
        <div>
          {" "}
          {keys1.map((categoryItem) => {
            // const categoryItem = Object.values(categoryItem)
            // console.log(categoryItem.title);
            return (
              <Card style={{ width: "100%" }}>
                <Card.Body className="bestOfSection">
                  <div className="homeCardSection">
                    <Card.Title>Best of Electronics</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                  </div>

                  <div className="itemsInCard">
                    <Card style={{ width: "3rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Text>title</Card.Text>
                    </Card>
                  </div>
                  <div className="itemsInCard">
                    <Card style={{ width: "3rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Text>title</Card.Text>
                    </Card>
                  </div>
                  <div className="itemsInCard">
                    <Card style={{ width: "3rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Text>title</Card.Text>
                    </Card>
                  </div>
                  <div className="itemsInCard">
                    <Card style={{ width: "3rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Text>title</Card.Text>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div> */}
      <div>
        <Card
          className="itemsCard"
          style={{
            margin: "20px",
            marginTop: "50px",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="text-center">
              Best Of All Products
            </Card.Title>
            <Container>
              <Row xs={1} md={2} lg={3}>
                {allItems.map((item) => {
                  return (
                    <Col>
                      <Link
                        to={`/product/${item.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card
                          className="itemCard"
                          style={{
                            margin: "10px",
                            width: "10rem",
                          }}
                        >
                          <Card.Title id="itemName" className="text-center">
                            {item.title}
                          </Card.Title>
                          <Card.Img
                            id="itemImg"
                            variant="top"
                            src={`${item.image}`}
                          />
                          <Card.Text className="text-center">
                            $ {item.price}
                          </Card.Text>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Container>

            <Button
              style={{ float: "right" }}
              variant="primary"
              onClick={clickViewMore}
            >
              View More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
