import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import ChatScreen from "./ChatScreen";
import SwipeButtons from "./SwipeButtons";
import Friendslist from "./Friendslist";
import Chats from "./Chats";
import FbChat from './FbChat';
import CoinsCard from "./CoinsCard";
import LeftColumn from "./LeftColumn"
import './App.css';



function App() {
  const[state, setState] = React.useState(false);
  const[current, setCurrent] = React.useState({});


  const openChat =(f) => {
    setState(true);
    setCurrent(f)
  }

  const closeChat= () => {
    setState(false);
  }


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <LeftColumn />
            <TinderCards/>
            <Friendslist openChat={openChat}/>
            <FbChat state={state} current={current} closeChat={closeChat}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
