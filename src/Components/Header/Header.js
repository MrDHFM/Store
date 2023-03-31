import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Cart, PersonCircle } from "react-bootstrap-icons";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/Actions/StoreActions";
import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  const categories1 = Object.values(categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log(err);
      });
    dispatch(getCategories(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <MDBIcon
              fas
              icon="store"
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories1.map((category) => {
                  return (
                    <NavDropdown.Item
                      /*   onClick={() => {
                        navigate(`/${category}`);
                      }} */
                      href={`/${category}`}
                    >
                      {category}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Product Name"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
              <Link to={`/search/${searchQuery}`}>
                <Button type="submit" variant="outline-light">
                  Search
                </Button>
              </Link>
            </Form>
            <Nav.Link>
              <Cart className="headerIcon" />
            </Nav.Link>
            <Nav.Link>
              <PersonCircle className="headerIcon" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
