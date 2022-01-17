import React from 'react';
import "./Header.css";
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            <Link to="/logged">
                <img className="header__logo" src="https://i.imgur.com/qD44bPW.png" alt='heart' />
            </Link>
            <div className="header2">
                <Link to="/chat">
                    <IconButton className="header__icon">
                        <ForumSharpIcon  fontSize="large" />
                    </IconButton > 
                </Link>
                <Link to="/chat">
                    <IconButton className="header__icon">
                        <AccountBoxSharpIcon fontSize="large" />
                    </IconButton>
                    
                </Link>
                <Link to="/register">
                <IconButton className="header__icon">
                        <LogoutIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            
            
        </div>
    );
}

export default Header;
