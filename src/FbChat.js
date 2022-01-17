import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import "./FbChat.css";

const FbChat = (props) => {
    const closeChat = () => {
        props.closeChat();
    };
    return (
        <>
            {props.state ? (
                <div className='ch'>
                    <div className='chh'>
                        <div className='chf'>
                            <div className="chhimg">
                                <img 
                                    src={props.current.img ? props.current.img : ""}
                                    alt="user"
                                />
                            </div>
                            <div className='chhname'>
                                {props.current.message ? props.current.message: ""}
                            </div>
                        </div>
                        <div className='chs'>

                            <FaRegWindowClose 
                                className="chhicons"
                                onClick={closeChat} 
                            />
                        </div>
                    </div>
                    <div className="chat_body">
                        <div className="chat_left">
                            <p className="msg">Lorem, ipsum dolor sit amet</p>
                        </div>
                        <div className="chat_right">
                            <p className="msg">Lorem, ipsum</p>
                        </div>
                        <div className="chat_left">
                            <p className="msg">
                                Lorem, ipsum dolor sit amet lskdjflkj sdfsdf sdf
                            </p>
                        </div>
                        <div className="chat_right">
                            < p className="msg">Lorem, ipsum sdd</p> {props.name}
                        </div>
                    </div>
                    <div className="chat_footer">
                        <input type="text" className="chat_input" placeholder="Aa" />
                        
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default FbChat