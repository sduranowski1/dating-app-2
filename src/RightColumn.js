import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Text, View } from 'react-native'

import "./RightColumn.css"

function Example(props) {
  const [people, setPeople] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const req = await axios.get('/tinder/cards')

          setPeople(req.data)
      }

      fetchData();
  }, []);

  const handleDelete = async (_id) => {
      await fetch('http://localhost:8003/tinder/cards' + _id, {
          method: "DELETE"
      } )

      const newPeople = people.filter(person => person._id != _id)
      setPeople(newPeople)
  }

  console.log(people)

  return (
    <CardColumns className="tCards__cardContainer1">
      <Card className="cardeeright1">
        <Text>
          <View style={{width:80, height:80, flex:1, flexDirection:'row'}}>
            <img className='cardimg1' src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
            <div className="card-text">Karol, 21</div>

          </View>

        </Text>
        <Text>
          <Text>hi there!</Text>

        </Text>

      </Card>
      <Card className="cardeeright1">
        <Text>
          <View style={{width:80, height:80, flex:1, flexDirection:'row'}}>
            <img className='cardimg1' src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
            <div className="card-text">Karol, 21</div>

          </View>

        </Text>
        <Text>
          <Text>hi there!</Text>

        </Text>

      </Card>
      <Card className="cardeeright1">
        <Text>
          <View style={{width:80, height:80, flex:1, flexDirection:'row'}}>
            <img className='cardimg1' src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
            <div className="card-text">Karol, 21</div>

          </View>

        </Text>
        <Text>
          <Text>hi there!</Text>

        </Text>

      </Card>
      <Card className="cardeeright1">
        <Text>
          <View style={{width:80, height:80, flex:1, flexDirection:'row'}}>
            <img className='cardimg1' src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
            <div className="card-text">Karol, 21</div>

          </View>

        </Text>
        <Text>
          <Text>hi there!</Text>

        </Text>

      </Card>
      
    </CardColumns>
  );
};

export default Example;