import React from 'react'
import Navbar from './Components/Navbar/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Photos from './Components/Photos/index'

function App() {
  return (
    <div className="App">
    <BrowserRouter basename="spacestagram">
    <Navbar />
    <Switch>
      <Route path="/info">
      </Route>
      <Route path="/">
      </Route>
    </Switch>
  </BrowserRouter>
  <Photos />
  
    </div>
  );
}

export default App;
