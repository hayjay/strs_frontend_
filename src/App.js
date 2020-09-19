import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllCompanies from './components/AllCompanies';
import { BrowserRouter, Switch, Route, matchPath } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ViewCompany from './components/ViewCompany';
import AddCompany from './components/AddCompany';
import Reports from './components/Reports';
import ViewReport from './components/ViewReport';
import ReportByCompany from './components/ReportByCompany';
import AddReport from './components/AddReport';

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
          <Route path="/add-company" component={AddCompany}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/view-report/00001" component={ViewReport}/>
          <Route path="/report-by-company/microsoft" component={ReportByCompany}/>
          <Route path="/report/create" component={AddReport}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
