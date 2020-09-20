import React, { Component } from 'react';
import './App.css';
import AllCompanies from './components/AllCompanies';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ViewCompany from './components/ViewCompany';
import AddCompany from './components/Company/create';
import Reports from './components/Reports';
import ReportByCompany from './components/ReportByCompany';
import AddReport from './components/AddReport';
import Dashboard from './components/Dashboard';
import { isAuthenticated } from './Utility/utils';


class App extends Component {
  // const isLoginPathActive = this.props.match.path;
  render() {   
    const userAuth = isAuthenticated();

    return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>

        {
          (!userAuth) ? 
           window.location.pathname.toLowerCase() === '/register' 
                        ? <Redirect to={{pathname: '/register', state: {from: this.props.location}}}/> 
                        : window.location.pathname.toLowerCase() === '/' 
                          ? '' 
                          : <Redirect to={{pathname: '/', state: {from: this.props.location}}}  /> 
                      :  ''

        }

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/all-companies" component={AllCompanies}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/view-company/microsoft" component={ViewCompany}/>
          <Route path="/add-company" component={AddCompany}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/report-by-company/microsoft" component={ReportByCompany}/>
          <Route path="/report/create" component={AddReport}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
