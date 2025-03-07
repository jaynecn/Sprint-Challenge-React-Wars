import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './components/CharacterList';


function App() {

  const [list, setList] = useState({
    characters: []
  });

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then((response) => {
      // console.log(response.data);
      setList({characters: response.data.results});
      // console.log(list);
    })
      .catch((error) => {
        console.log(`API error: ${error.message}`);
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={list.characters}/>
    </div>
  );
}

export default App;
