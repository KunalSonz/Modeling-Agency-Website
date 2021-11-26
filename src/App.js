import React from 'react';
import './App.css';
import Aboutus from './components/aboutus';
import Home from './components/home';
import Services from './components/services';
import Models from './components/models';
import Contact from './components/contactus';
// import Nav from './components/nav1';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/aboutus" exact component={Aboutus}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/models" exact component={Models}/>
          <Route path="/contactus" exact component={Contact}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
