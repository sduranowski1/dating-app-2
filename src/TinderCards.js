import React, { useState, useEffect, useSelector, useDispatch } from 'react';
import TinderCard from "react-tinder-card";
import { Container, Row, Col } from 'reactstrap';
import ReactPaginate from 'react-paginate';

import axios from './axios';
import { Link } from "react-router-dom";
import './TinderCards.css';


import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CancelIcon from '@mui/icons-material/Cancel';
import LikeButton from "./LikeButton"

import openChat from "./Friendslist"
import { notEqual } from 'assert';
import { grey, red } from '@material-ui/core/colors';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';



function TinderCards() {
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

    const [pageNumber, setPageNumber] = useState(0);

    const peoplePerPage = 12;
    const pagesVisited = pageNumber * peoplePerPage;
    
    const [isOpen, setIsOpen] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)


    const handleLike = () => {
        setIsLike(true)

    }

    const handleUnLike = () => {
        setIsLike(false)
    }

    const LikeButton = ({isLike, handleLike, handleUnLike}) => {
        return (
            <div>
                {
                    isLike
                    ? <FavoriteIcon onClick={() => handleUnLike()}/>
                    : <FavoriteBorderIcon onClick={() => handleLike()} />
                }
                
            </div>
        )
    }

    


    const displayPeople = people
        .slice(pagesVisited, pagesVisited + peoplePerPage)
        .map((person) => {
            return (
                <Card
                    key={person.name}
                    preventSwipe={['up', 'down']}

                >   
                    <CardHeader
                        action={
                            <IconButton onClick={() => handleDelete(person._id)}>
                                <CancelIcon />
                            </IconButton>
                        }
                    />
                    
                    
                    <div 
                        style={{ backgroundImage: `url(${person.imgUrl})`}}
                        className="card"
                    >
                        <h1>{person.name}</h1>
                        <div className="butonee1" >
                            <IconButton> 
                                <LikeButton 
                                isLike={isLike}
                                handleLike={handleLike}
                                handleUnLike={handleUnLike}
                                />
                            </IconButton>
                        </div>   
                        <div className="butonee2">
                            <Link to={`/chat/${person.name}`}>
                                <IconButton> 
                                    <MessageIcon />
                                </IconButton> 
                            </Link>
                            
                        </div>
                    </div>
                    </Card>
                
                )})
    
    const pageCount = Math.ceil(people.length / peoplePerPage);
    
            

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    

    return (
        <div>


            <div className="tinderCards__cardContainer">
                {displayPeople}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );


    
}

export default TinderCards
