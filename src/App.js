import React from 'react';
import NavBar from './components/NavBar'
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import './App.css';

class App extends React.Component {

  render() {

  return (

      <div className="App">
              <NavBar></NavBar>

        <CategoriesContainer/>
      </div>
    );
  }
}

export default App;
