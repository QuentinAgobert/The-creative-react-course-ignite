import React from 'react';
import styled from 'styled-components';
// Components & pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <Route path={["games/:id", "/"]}>
            <Home />
        </Route>
    </div>
  );
}

export default App;
