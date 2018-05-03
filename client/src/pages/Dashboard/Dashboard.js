import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css"; 



class Dashboard extends Component {
  

  render() {
    return (
      <Container fluid>
        <h1>Hello UserName, Welcome to your Dashboard</h1>

      
        <Row>
          <Col size="md-12">
            <div className="contentContainer">
              <h2>Item/Service Spend Cost</h2>

          <h3>Date:</h3><Input>
          </Input>

          <h3>Item or Service:</h3><Input>
          </Input>

          <h3>Gross Cost:</h3><Input>
          </Input>

          <h3>Note:</h3><TextArea>
          </TextArea>

          <FormBtn>
            Submit
          </FormBtn>
          </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="thirdContentContainer">
              <h2>Tracking</h2>
              
              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Fruits</p></li>
    <li><p className="grossAmt">Gross Costs: $15.00</p></li>
    <li><p>My Note: Apples, Oranges.</p></li>
  </div>
</div>
              </Col>

              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Savings</p></li>
    <li><p className="grossAmt">Gross Costs: $50.00</p></li>
    <li><p>My Note: Emergency Funds</p></li>
  </div>
</div>
              </Col>

              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Tires</p></li>
    <li><p className="grossAmt">Gross Costs: $15.00</p></li>
    <li><p>My Note: Flat Tire</p></li>
  </div>
</div>
              </Col>

              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Studio Equipment</p></li>
    <li><p className="grossAmt">Gross Costs: $100.00</p></li>
    <li><p>My Note: Mic.</p></li>
  </div>
</div>
              </Col>

              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Nacho</p></li>
    <li><p className="grossAmt">Gross Costs: $10</p></li>
    <li><p>My Note: Food for friends.</p></li>
  </div>
</div>
              </Col>

              <Col size="md-2">
              <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title panelHeader">May</h3>
  </div>
  <div className="panel-body">
    <li><p>Item: Gas</p></li>
    <li><p className="grossAmt">Gross Costs: $30.00</p></li>
    <li><p>My Note: Tampa Trip.</p></li>
  </div>
</div>
              </Col>
                
          </div>
          </Col>
        </Row>

        <Row>
        <div className="fourthContentContainer">
          <Col size="md-6">
              <h1>Your Monthly Income:</h1><h1 className="monthIncome">$3000.00</h1>
          </Col>
          <Col size="md-6">
              <h1>Your Monthly Outcome:</h1><h1 className="monthOutcome">$-3120.00</h1>
          </Col>
        </div>
        </Row>
        <div className="secondContentContainer">
        
        <Row>
          <Col size="md-12">
            <h1>Total Monthly Income vs Outcome:</h1><h1 className="totalVS">-$120.00</h1>
          </Col>
        </Row>
        </div>
        
      
      </Container>
    );
  }
}

export default Dashboard;
