import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllCompanies from './components/AllCompanies';
import { BrowserRouter, Switch, Route, matchPath } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ViewCompany from './components/ViewCompany';
class App extends Component {
  // const isLoginPathActive = this.props.match.path;
  render() {
    
    return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/all-companies" component={AllCompanies}/>
          <Route path="/view-company/microsoft" component={ViewCompany}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
