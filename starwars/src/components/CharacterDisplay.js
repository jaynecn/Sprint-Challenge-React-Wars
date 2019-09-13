import React from 'react';
import styled from 'styled-components';
import '../../src/App.css';

//Put Styled Components here

const StyledH1 = styled.h1`
  color: darkslategray;
  text-shadow: 2px 2px 2px rgb(41, 36, 36);`

const StyledH2 = styled.h2`
  font-size: 16px;
  color: brown;`

const StyledH3 = styled.h3`
  font-size: 14px;
  color: black;`

const StyledDisplay = styled.div`
  background-color: rgb(252, 182, 121);
  opacity: .5;
  width: 20vw;
  height: 20vh;
  margin: 10px;
  border: 1px solid blue;
  &: hover{
    opacity: 1;
  }
  `


function CharacterDisplay(props) {
  const {characterData} = props;

  return (
    <StyledDisplay>
      <StyledH1>{characterData.name}</StyledH1>
      <StyledH2>Hair: {characterData.hair_color} Skin: {characterData.skin_color} Eyes: {characterData.eye_color}</StyledH2>
      <StyledH3>Birth Year: {characterData.birth_year}</StyledH3>
    </StyledDisplay>
  )
}

export default CharacterDisplay;