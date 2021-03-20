import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />

      </Switch>
    </div>
  );
}

export default App;
