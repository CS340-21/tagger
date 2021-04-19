import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import RosterList from './RosterList';
import PlayerList from './PlayerList';
import Tagger from './Tagger';
import CreateGame from './CreateGame';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/rosters" component={RosterList} />
        <Route path="/players" component={PlayerList} />
        <Route path="/create_game" component={CreateGame} />
        <Route path="/tagger" component={Tagger} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// https://stackoverflow.com/questions/44387318/linking-button-to-another-page
