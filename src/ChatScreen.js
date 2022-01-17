import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import axios from './axios';

import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Oscar",
      image:
        "https://fairfield.pl/wp-content/uploads/2020/09/DSC_0366-scaled-e1600929070291.jpg",
      message: "Whats up 💌",
    },
    {
      name: "Oscar",
      image:
        "https://fairfield.pl/wp-content/uploads/2020/09/DSC_0366-scaled-e1600929070291.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Oskar!",
    },

  ]);

  const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/Kacper')

            setPeople(req.data)
        }

        fetchData();
    }, []);

    console.log(people)

  const handleSend = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
    }

    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH OSCAR ON 10/08/20</p>
      {people.map((person) =>
        person.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={person.name}
              src={person.imgUrl}
            />
            <p className="chatScreen_text">{person.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{person.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;