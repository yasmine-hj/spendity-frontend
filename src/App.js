import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import './App.css';

class App extends React.Component {

  render() {

  return (
      <div className="App">
        <CategoriesContainer/>
      </div>
    );
  }
}

export default App;
