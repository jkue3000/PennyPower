import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./About.css"; 
import happy1 from "../../images/happy1.png";
import happy2 from "../../images/happy2.png";
import happy3 from "../../images/happy3.png";
import happy4 from "../../images/happy4.png";
import portfolio from "../../images/portfolio.jpg";
import trust from "../../images/trust.png";

class About extends Component {

  render() {
    return (
      <Container fluid>
        
        <Row>
          <Col size="md-12">
              <h1>About Penny Power</h1>
          </Col>
        </Row>
      
      <div className="contentContainer">
        <h3 className="socialProof">Why Penny Power?</h3>
        <Row>
          <div className="firstCol">
          <Col size="md-4">
            <iframe src="https://giphy.com/embed/3o6ZtelrVAOD5EcmCQ" width="100%" height="100%" frameBorder="0" className="giphy-embed gifyCss" allowFullScreen></iframe>
          </Col>
          <Col size="md-8">
              <p>
                Penny Power was created to inform everyday people about fincial freedom and explain how to manage
                an individual's everyday income.  There are many techniquies to reduce your monthly outcome without living frugal.  We want to inform everyday people
                about the power compounding interest, stoozing credit cards, or even using debt to your advantage.
              </p>
          </Col>
          </div>
        </Row>
        
        <Row>
          <h3 className="socialProof">The Face Behind Penny Power</h3>
          <Col size="md-8">
                <p>
                Penny Power was founded by Jordan Kue.  He is 23 year old who crossed paths with debt and found out how dreadful it can really be.  
                He belives in living free from the financial institutions and enjoying life on your own time!  His  main mantra is to live for YOURSELF and belive in what you want to do.
                Debt may be scary to tackle at first but with Penny Power, you'll have more than an understanding of what your Income is versus your Outcome.
                </p>
          </Col>
          <Col size="md-4">
                <img src={portfolio} className= "pennyPic"/>
          </Col>
        </Row>
      </div>

      <div className="secondContentContainer">
        <Row>
          <Col size="md-12">
            <h3 className="socialProof">Join Many Other Financially Free People!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <img src={happy1} className= "pennyPic"/>
          </Col>
          <Col size="md-3">
            <img src={happy2} className= "pennyPic"/>
          </Col>
          <Col size="md-3">
            <img src={happy3} className= "pennyPic"/>
          </Col>
          <Col size="md-3">
            <img src={happy4} className= "pennyPic"/>
          </Col>


        </Row>
      </div>

      <div className="secondContentContainer">
        <Row>
          <Col size="md-4">
            <img src={trust} className= "trustPic"/>
          </Col>
          <Col size="md-4 sm-12">
            <h3 className= "leads bounce animated infinite">Learn About Smart Income</h3>
            <Input placeholder="Email">
            </Input>
            <div className= "buttonCss">
            <FormBtn>
              Control Outcome!
            </FormBtn>
            </div>
          </Col>
          <Col size="md-4">
            <h3 className="leads">Follow Us!</h3>
            <div className="leads">
              <a href="https://www.facebook.com/" target="_blank" className="iconHome"><i className="fab fa-facebook-f fa-5x"></i></a>
              <a href="https://twitter.com/" target="_blank" className="iconHome"><i className="fab fa-twitter fa-5x"></i></a>
              <a href="https://www.instagram.com/" target="_blank" className="iconHome"><i className="fab fa-instagram fa-5x"></i></a>
            </div>
          </Col>
        </Row>
      </div>

        
      </Container>
     

    );
  }
}

export default About;
