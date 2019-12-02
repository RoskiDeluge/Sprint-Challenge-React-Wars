import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./components/PersonCard";
import styled from "styled-components";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const characters = response.data.results;
        setPerson(characters);
      })
      .catch(error => {
        console.log("Sorry no Star Wars characters available at this time", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {person.map(item => {
          return <PersonCard key={item} personName={item.name} personGender={item.gender} personHome={item.homeworld} />;
        })}
      </div>
    </div>
  );
}

export default App;
