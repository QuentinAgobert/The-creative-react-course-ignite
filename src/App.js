import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    });
  return (
    <div className="App">
        <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
