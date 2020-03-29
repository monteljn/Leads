import React, {useState, useEffect} from 'react';
import './App.css'; 
import AddLead from './AddLead';
import AllLeads from './AllLeads';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllLeads} />
          <Route path="/AddLead" component={AddLead} />
        </Switch>
      </div>
    </Router>
  ); 
  
}



export default App;
