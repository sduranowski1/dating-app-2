import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import Slider from '@mui/material/Slider';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

import "./LeftCards.css"
import "./TinderCards"
import { IconButton } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

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
          <IconButton className="butonee1">
            <ManIcon />
          </IconButton>
          <IconButton className="butonee2">
            <WomanIcon/>
          </IconButton>
          <CardText>Age range </CardText>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
          <CardText>City </CardText>
          <div class="form-group">
            <label for="sel1"></label>
            <select class="form-control" id="sel1">
              <option>Warsaw</option>
              <option>Bangkok</option>
              <option>Toronto</option>
              <option>San Francisco</option>
            </select>
          </div>
          <Button className="btn2">Search</Button>
        </Card>
      </CardColumns>
    );
  };

