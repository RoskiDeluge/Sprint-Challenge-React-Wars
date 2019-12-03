import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  background: lightgray;
  color: black;
  width: 250px;
  max-height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const CharacterName = styled.h2`
  font-family: 'Impact', sans-serif;
`;

const CharacterProperty = styled.p`
  font-family: 'Courier New', serif;
`;

const PersonCard = props => {
  return (
    <CharacterCard>
      <CharacterName>{props.personName}</CharacterName>
      <CharacterProperty>Gender: {props.personGender}</CharacterProperty>
      <CharacterProperty>Height: {props.personHeight}</CharacterProperty>
      <CharacterProperty>Mass: {props.personMass}</CharacterProperty>
    </CharacterCard>
  );
};
export default PersonCard;