import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  background: gray;
  color: black;
  width: 250px;
  max-height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const PersonCard = props => {
  return (
    <CharacterCard>
      <h2>{props.personName}</h2>
      <p>Gender: {props.personGender}</p>
      <p>Height: {props.personHeight}</p>
      <p>Mass: {props.personMass}</p>
    </CharacterCard>
  );
};
export default PersonCard;