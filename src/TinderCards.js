import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import { Container, Row, Col } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import database from './firebase';
import axios from './axios';
import './TinderCards.css';



function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data)
        }

        fetchData();
    }, []);

    console.log(people)

    const [pageNumber, setPageNumber] = useState(0);

    const peoplePerPage = 12;
    const pagesVisited = pageNumber * peoplePerPage;

    const displayPeople = people
        .slice(pagesVisited, pagesVisited + peoplePerPage)
        .map((person) => (
            <TinderCard
                key={person.name}
                preventSwipe={['up', 'down']}
            >
                <div 
                    style={{ backgroundImage: `url(${person.imgUrl})`}}
                    className="card"
                >
                    <h1>{person.name}</h1>
                </div>
            </TinderCard>
        ))
    
    const pageCount = Math.ceil(people.length / peoplePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // const people = [];
    
    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data()))
            );
        return () => {
            unsubscribe();
        };
    }, []);

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
