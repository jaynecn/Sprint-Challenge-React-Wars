import React from 'react';
// import styled from 'styled-components';
import '../../src/App.css';

//Put Styled Components here

function CharacterDisplay(props) {
  const {characterData} = props;

  return (
    <div className="character-display">
      <h1>{characterData.name}</h1>
    </div>
  )
}

export default CharacterDisplay;