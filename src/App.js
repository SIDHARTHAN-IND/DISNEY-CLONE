import React from 'react';
import { Counter } from "./features/counter/Counter"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
          <Home/>
            
          </Route>
          <Route path="/detail/:id"> 
            <Detail/>
          </Route>
          <Route path="/"> 
             <Login />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
