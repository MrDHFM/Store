import axios from "axios";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/Actions/StoreActions";

import "./Products.css";

const Products = () => {
  const [sort, setSort] = useState(false);
  const products = useSelector((state) => state.allProducts);
  const products1 = Object.values(products);
  //console.log(products);

  const dispatch = useDispatch();

  const sortClick = () => {
    setSort(!sort);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchApiUrl = sort
        ? "https://fakestoreapi.com/products?sort=desc"
        : "https://fakestoreapi.com/products";

      const response = await axios.get(fetchApiUrl).catch((err) => {
        console.log(err);
      });
      console.log(response.data);

      dispatch(getAllProducts(response.data));
    };
    fetchProducts();
  }, [sort]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card style={{ margin: "20px" }}>
        <div className="sortSection">
          <Card.Title className="text-center" style={{ padding: "20px" }}>
            All Products{" "}
          </Card.Title>
          <MDBBtn
            onClick={sortClick}
            color="none"
            style={{ border: "none", backgroundColor: "inherit" }}
          >
            <MDBIcon icon="sort" className="me-2" />
            <span>sort by latest</span>
          </MDBBtn>
        </div>
        <div>
          <Container>
            <Row xs={1} md={2} lg={3}>
              {products1.map((item) => {
                return (
                  <Col>
                    <Card
                      key={item.id}
                      style={{ padding: "10px", margin: "10px" }}
                    >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{
                          width: "70px",
                          height: "70px",
                          margin: "auto",
                        }}
                      />
                      <Card.Text className="text-center">
                        {item.title}
                      </Card.Text>
                      <Card.Text className="text-center">
                        $ {item.price}
                      </Card.Text>
                      <Link
                        to={`/product/${item.id}`}
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <Button>Buy</Button>
                      </Link>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Card>
    </div>
  );
};

export default Products;
