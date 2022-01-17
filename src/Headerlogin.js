import React from 'react';
import "./Headerlogin.css";
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Headerlogin() {
    return (
        // BEM
        <div className="headerlogin">
            <Link to="/">
                <img className="headerlogin__logo" src="https://i.imgur.com/qD44bPW.png" alt='heart' />
            </Link>
            
        </div>
    );
}

export default Headerlogin;