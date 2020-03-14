import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import BudgetsContainer from './containers/BudgetsContainer';
import BudgetFormContainer from './containers/BudgetFormContainer';
import AboutContainer from './containers/AboutContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'

class App extends React.Component {

  render() {
  return (
      <div className="App">
        <Router>
        <NavBar></NavBar>
          <Route exact path="/" component={CategoriesContainer} />
           <Route exact path="/categories" component={CategoriesContainer} />
           <Route exact path="/about" component={AboutContainer} />
           <Route path={`/categories/:categoryId/budgets`} component={BudgetsContainer}/>
           <Route path={`/categories/:categoryId/budgets/new`} component={BudgetFormContainer}/>
        </Router>
      </div>
    );
  }
}

export default App;
