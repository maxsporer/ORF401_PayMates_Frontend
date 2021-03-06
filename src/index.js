import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Deal from './Deal'
import CreateDeal from './CreateDeal'
import reportWebVitals from './reportWebVitals';

import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={App}/>
      {/* <Route path="/main" component={App} /> */}
      <Route path="/Deal" component={Deal} />
      <Route path="/CreateDeal" component={CreateDeal} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
