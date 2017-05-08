import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'
import App from './App';
import Home from './Components/Home';
import './index.css';
import DateSelection from './Components/DateSelection';

// var destination = document.querySelector("#root");

// ReactDOM.render(
//   <App />,
//   destination
// );

ReactDOM.render(
    <BrowserRouter>
          <Route path="/" component={App}>
            <Route path="dateselection" component={DateSelection} />
          </Route>
     </BrowserRouter>,
     document.getElementById('root')
);


