import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TinderCards from './TinderCards';
import './LeftCards.css';

class LeftArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
            name: 'Kacper, 13',
            url: 'https://allaboutstevejobs.com/resources/img/pics/1976-01-01_00030.jpg'
        },
        {
            name: 'Pjotr, 21',
            url: 'https://i.insider.com/52f3fdaeeab8ea35176ea827?width=750&format=jpeg&auto=webp'
        },
        {
            name: 'Gąsior, 16',
            url: 'https://i.ytimg.com/vi/7lNmB_HWTvw/hqdefault.jpg'
        },
        {
            name: 'Karzeł, 28',
            url: 'https://supchina.com/wp-content/uploads/2020/05/Tall-Chinese-man.jpg'
        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="2">
          <TinderCards key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default LeftArea;