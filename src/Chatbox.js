import React from 'react';
import "./Chatbox.css";

function Chatbox() {
    return (
        <div className="container">
            <div className="chat">
                <div className="chat-header">
                    <div className="profile">
                        <div className="left">
                            <img src={require("./img/arrow.png")} className="arrow"/>
                            <img src={require("./img/pp.png")} className="pp"/>
                            <h2>Elias</h2>
                            <span>online</span>
                        </div>
                        <div className="right">
                            <img src={require("./img/video.png")} className="icon"/>
                            <img src={require("./img/phone.png")} className="icon"/>
                            <img src={require("./img/more.png")} className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <p><img src={require("./img/emoji-1.png")} className="emoji"/>
                                Hi, Elias
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-2.png")}/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-l">
                        <div className="mess">
                            <p>
                                Oh! hi <img src={require("./img/emoji-2.png")} className="emoji"/>
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                            </div>
                        </div>
                        <div className="sp"></div>
                    </div>

                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <p>
                            How are you doing?
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-2.png")}/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-l">
                        <div className="mess">
                            <p>I'm doing alright. How about you?</p>
                            <div className="check">
                                <span>4:00 PM</span>
                            </div>
                        </div>
                        <div className="sp"></div>
                    </div>

                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <p>
                            Not too bad. The weather is great isn't it?
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-2.png")}/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-l">
                        <div className="mess">
                            <p>
                                Yes. It's absolutely beautiful today.
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                            </div>
                        </div>
                        <div className="sp"></div>
                    </div>

                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <img src={require("./img/post2.jpg")} className="img_chat"/>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-2.png")}/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <p>I wish it was like this more frequently.</p>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-2.png")}/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-l">
                        <div className="mess">
                            <p>
                            Me too. <img src={require("./img/heart.png")}  className="emoji"/>
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                            </div>
                        </div>
                        <div className="sp"></div>
                    </div>
                    <div className="chat-r">
                        <div className="sp"></div>
                        <div className="mess mess-r">
                            <p>
                            So where are you going now?
                            </p>
                            <div className="check">
                                <span>4:00 PM</span>
                                <img src={require("./img/check-1.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-footer">
                    <img src={require("./img/emo.png")} className="emo"/>
                    <textarea placeholder="Type a message"></textarea>
                    <div className="icons">
                        <img src={require("./img/attach file.png")}/>
                        <img src={require("./img/camera.png")}/>
                    </div>
                    <img src={require("./img/mic.png")} className="mic"/>
                </div>
            </div>
        </div>
    )
}

export default Chatbox
