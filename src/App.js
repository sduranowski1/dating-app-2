import React, { useState } from "react";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards";
import ChatScreen from "./ChatScreen";
import Friendslist from "./Friendslist";
import Chats from "./Chats";
import FbChat from './FbChat';
import LeftColumn from "./LeftColumn"
import './App.css';

import Login from "./Login";
import Register from "./Register";
import Profilee from "./Profilee";

function App() {

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
              <Route exact path="/login" component={() => <Login />  } />
              <Route exact path="/register" component={() => <Register />  } />
              <Route exact path="/" component={() => <Profilee authorized={true} />} />
            </Switch>
          </Router>
    </div>
  );
};

export default App;
