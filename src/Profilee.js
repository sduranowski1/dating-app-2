import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from './Header';
import LeftColumn from "./LeftColumn"
import TinderCards from "./TinderCards";
import Friendslist from "./Friendslist";
import FbChat from './FbChat';
import RightColumn from './RightColumn'




function Profilee({ authorized }) {
    const[state, setState] = React.useState(false);
    const[current, setCurrent] = React.useState({});
    
    const openChat =(f) => {
        setState(true);
        setCurrent(f)
      }
    
      const closeChat= () => {
        setState(false);
      }

    if (!authorized) {
        return <Redirect to="/register" />
    }

    return (
        <div>
            <Header />
            <LeftColumn />
            <TinderCards />

            <RightColumn/>
            <FbChat state={state} current={current} closeChat={closeChat}/>
            
        </div>
    )
}

export default Profilee
