import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character';

const App = () => {
  const [ swData, setSwData ] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(result => {
      console.log(result)
      setSwData(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {swData.map(item => {
        return <Character data={item} />
      })}
    </div>
  );
}

export default App;
