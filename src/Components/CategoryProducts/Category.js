import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "../../redux/Actions/StoreActions";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  console.log(category);

  const categoryProducts = useSelector((state) => state.productsByCategory);
  console.log(categoryProducts);

  const categoryProducts1 = Object.values(categoryProducts);

  const fetchByCategory = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
    dispatch(getProductsByCategory(response.data));
  };

  useEffect(() => {
    fetchByCategory();
  }, []);

  return (
    <div>
      <Card style={{ margin: "20px", marginBottom: "150px" }}>
        <Card.Title className="text-center">{category}</Card.Title>
        <div>
          <Container>
            <Row xs={1} md={2} lg={3}>
              {categoryProducts1.map((item) => {
                return (
                  <Col>
                    <Card style={{ padding: "10px", margin: "10px" }}>
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

export default Category;
