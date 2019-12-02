import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  background: gray;
  color: black;
  width: 400px;
  max-height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PersonCard = props => {
  return (
    <CharacterCard>
      <h2>{props.personName}</h2>
      <p>{props.personGender}</p>
      <p>{props.personHome}</p>
    </CharacterCard>
  );
};
export default PersonCard;