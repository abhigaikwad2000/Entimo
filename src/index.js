import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { connect } from "react-redux";
//import { push } from "connected-react-router";

import App from './App';
import { ConnectedRouter } from "connected-react-router";
//import configureStore, { history } from "./redux/configureStore";
import { BrowserRouter } from 'react-router-dom';
//const store = configureStore();

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>
    

,
document.getElementById("root")
);


