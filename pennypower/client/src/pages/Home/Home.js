import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import card from "../../images/card.jpg";
import online from "../../images/online.jpg";
import transaction from "../../images/transaction.jpg";
import pennyStack from "../../images/pennyStackJumbotron.png";
import "./Home.css"; 
import trust from "../../images/trust.png";


class Thedata extends Component {
  

  render() {
    return (
      <Container fluid>
      
    <div className="jumbotron">

    </div>

    <div className="contentContainer">
      <div className= "firstTextArea">
        <Row>
          <Col size="md-6 sm-12">
            <h1>Tame your DEBT</h1>
            <div className= "textTest">
                <li>See how much "income" is actually "outcome."</li>
                <li>Control where your money is going.</li>
                <li>Break down monthly income and live finacially free.</li>
                <li>Learn how to make life changing desicions.</li>
                <li>Create the lifestyle you want.</li>
            </div>
          </Col>

          <Col size="md-6 sm-12">
            <h1>Listen to Dave Ramsey and Change Your Journey</h1>
            <div className="video-responsive">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/yWYvNDiZUOs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
        </div>
      </div>
      
      <div className="secondContentContainer">
  
        <Row>
          
          <Col size="md-4">
            <div className="homePicOverlay">
              <img src={card} className= "pennyPic"/>
              <div className="overlay">
                <div className="text"> Track Spending With One Swipe</div>
              </div>
            </div>
          </Col>

          <Col size="md-4">
          <div className="homePicOverlay">
            <img src={online} className= "pennyPic"/>
            <div className="overlay">
              <div className="text"> Stay Connected At All Times</div>
            </div>
            </div>
          </Col>

          <Col size="md-4">
          <div className="homePicOverlay">
            <img src={transaction} className= "pennyPic"/>
            <div className="overlay">
              <div className="text"> Track Personal Spending and Bussiness Spending</div>
            </div>
            </div>
          </Col>

        </Row>
        </div>

      <div className="secondContentContainer">

        <Row>
          <Col size="md-12">
            <h1>About Penny Power</h1>
            <div className="textTest">
                   To many people live paycheck to paycheck, trying to pay their bills and debt.
              Living a lifetsyle with either everything bought through loans, financed or have 30 plus years mortgage, we want to help everyday hardworking people like you take control of
               your INCOME and manage your OUTCOME.  If you are Homeless or make a $100,000 salary, Penny Power can help give you financial freedom.
          </div>
          </Col>
        </Row>

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

export default Thedata;
