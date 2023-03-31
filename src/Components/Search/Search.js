import React from "react";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Search = () => {
  const products = useSelector((state) => state.allProducts);
  const products1 = Object.values(products);
  const { productName } = useParams();
  console.log(productName);
  console.log(products1);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card style={{ marginBottom: "150px" }}>
        <div className="sortSection">
          <Card.Title className="text-center" style={{ padding: "20px" }}>
            Search results for: {productName}
          </Card.Title>
        </div>
        <div>
          <Container>
            <Row xs={1} md={2} lg={3}>
              {products1.filter((item) =>
                item.title.toLowerCase().includes(productName.toLowerCase())
              ).length === 0 ? (
                <p
                  style={{
                    width: "fit-content",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  Sorry no Products Available....
                </p>
              ) : (
                <>
                  {products1
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(productName.toLowerCase())
                    )
                    .map((item) => {
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
                </>
              )}
            </Row>
          </Container>
        </div>
      </Card>
    </div>
  );
};

export default Search;
