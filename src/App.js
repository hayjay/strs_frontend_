import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllCompanies from './components/AllCompanies';
import { BrowserRouter, Switch, Route, matchPath } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
class App extends Component {
  // const isLoginPathActive = !!matchPath(this.props.location.pathname, '/');

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/all-companies" component={AllCompanies}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
