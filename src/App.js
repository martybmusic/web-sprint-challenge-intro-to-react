import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character';

const App = () => {
  const [ swData, setSwData ] = useState([])
  const [charId, setCharId] = useState(null)
  const moreDetails = name => {
    setCharId(name)
  }
  const closeDetails = () => {
    setCharId(null)
  }
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(({data}) => setSwData(data))
    .catch(error => {
      console.log(error)
    })
  }, [])

  const Characters = props => (
    <div className='character'>
      {props.info.name}
      <button onClick={() => moreDetails(props.info.name)}>
      more
      </button>
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characterNames">
      {swData.map(item => {
        return <Characters key={item.name} info={item}/>
      })}
      {charId && <Character name ={charId} close={closeDetails} />}
    </div>
    </div>
  );
}

export default App;
