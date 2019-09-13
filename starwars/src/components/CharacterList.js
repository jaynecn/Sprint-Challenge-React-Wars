import React from 'react';
import CharacterDisplay from './CharacterDisplay';
import './StarWars.css';

function CharacterList(props) {
  console.log(props);
  const {characters} = props;
  return(
    <div className="character-list">
      {
        characters.map((info) => {
          return <CharacterDisplay
            key={info.created}
            characterData={info}
          />
        })
      }
    </div>
  )
}

export default CharacterList;