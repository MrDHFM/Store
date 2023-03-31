import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { PersonCircle } from "react-bootstrap-icons";

import "./Login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Actions/StoreActions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.allUsers.users);

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const fetchUsers = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => {
        console.log(err);
      });
    dispatch(getUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const loginClick = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (username === user.username && password === user.password) {
        navigate("/home");
      } else {
        setErrMsg("Invalid Credentials");
      }
    });
  };
  return (
    <div>
      <Card style={{ width: "25rem" }} className="loginCard">
        <PersonCircle className="loginIcon" />
        <Card.Body>
          <Card.Title className="text-center">Signup</Card.Title>
          <Card.Text>{errMsg}</Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={usernameChange}
                placeholder="Enter Username"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={passwordChange}
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={loginClick} variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Card.Body>
        <Card.Link href="/" className="cardLink">
          Already have, Login here
        </Card.Link>
      </Card>
    </div>
  );
};

export default Signup;
