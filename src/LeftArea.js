import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeftCards from './LeftCards';
import './LeftCards.css';

class LeftArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David",
          company: ", Inc",
          description: "Met at"
        },
        {
          id: 2,
          name: "Mark",
          company: ", Inc",
          description: "Met at"
        },
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <LeftCards key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container className="tCards__cardContainer">
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default LeftArea;