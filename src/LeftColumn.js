import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

import "./LeftCards.css"

const Example = (props) => {
  return (
    <CardColumns className="tCards__cardContainer">
      <Card className="cardee">
        <CardBody>
          <CardTitle tag="h5" className="card.title">You have</CardTitle>
          <CardSubtitle tag="h6" className="card-body">100 coins</CardSubtitle>
          <CardText> </CardText>
          <Button className="btn">Recharge</Button>
        </CardBody>
      </Card>
      <Card className="cardee">
        <CardTitle tag="h5">Search</CardTitle>
        <CardText className="card-text">I'm looking for </CardText>
        <Button className="fembtn">Female</Button>
        <CardText>Age range </CardText>
        <CardText>City </CardText>
        <Button className="btn2">Search</Button>
      </Card>
    </CardColumns>
  );
};

export default Example;