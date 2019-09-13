import React from 'react';
import CharacterDisplay from './CharacterDisplay';
import styled from 'styled-components';
import './StarWars.css';


// Styled Components

const StyledList = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: 10px; `


function CharacterList(props) {
  console.log(props);
  const {characters} = props;
  return(
    <StyledList>
      {
        characters.map((info) => {
          return <CharacterDisplay
            key={info.created}
            characterData={info}
          />
        })
      }
    </StyledList>
  )
}

export default CharacterList;