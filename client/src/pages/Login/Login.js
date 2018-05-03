import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Login.css"; 

class Logininfo extends Component {
  

  render() {
    return (
      <Container fluid>
        <div className="contentContainer">
          <h1>Login</h1>
          <Row>
            <Col size="md-4">
            </Col>
            <Col size="md-4">
              <Input placeholder="Email login">
              </Input>

              <Input placeholder="Password">
              </Input>

              <FormBtn>
              Login
              </FormBtn>
            </Col>
            <Col size="md-4">
            </Col>
          </Row>
        </div>

      </Container>
    );
  }
}

export default Logininfo;
