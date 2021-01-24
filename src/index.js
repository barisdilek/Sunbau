import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './index.css';
import App from './App';
import Home from './components/Home';
import Fokus from './components/fokus';
import Team from './components/team';
import Kontakt from './components/kontakt';
import StellenAnzeigen from './components/stellenanzeigen';
import Impressum from './components/impressum';
import DatenSchutz from './components/datenxchutz';
//import reportWebVitals from './reportWebVitals';
//import { Route, Switch } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  //   <Home />
  //   <Fokus />
  // </React.StrictMode>,
  <Router>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/Home" exact>
        <Home />
      </Route>
      <Route path="/fokus" exact>
        <Fokus />
      </Route>
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route path="/kontakt" exact>
        <Kontakt />
      </Route>
      <Route path="/stellenanzeigen" exact>
        <StellenAnzeigen />
      </Route>
      <Route path="/impressum" exact>
        <Impressum />
      </Route>
      <Route path="/datenSchutz" exact>
        <DatenSchutz />
      </Route>
      {/* <Route exact path="/" component={App}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/fokus" component={Fokus}/> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
