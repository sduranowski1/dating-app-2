import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import "./LeftCards.css"

class LeftCards extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div>
        <Card className="cardee">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default LeftCards;
