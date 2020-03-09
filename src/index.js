import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import categoryReducer from './reducers/categoryReducer'
import './index.css';
import App from './App';
import BudgetsContainer from './containers/BudgetsContainer';
import BudgetFormContainer from './containers/BudgetFormContainer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(categoryReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/budget/new"component={BudgetFormContainer} />
      <Route exact path="/budgets" component={BudgetsContainer} /> 
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
