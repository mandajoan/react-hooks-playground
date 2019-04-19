import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TypeRacer from './typeRacer';
import TicTacToe from './ticTacToe';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/tic-tac-toe" component={TicTacToe}/>
      <Route exact path="/type-racer" component={TypeRacer}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
