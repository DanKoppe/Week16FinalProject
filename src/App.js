import React, { Component } from 'react'; // importing react libary, components class from react module
import { GamesList } from './components/GamesList'; //importing GamesList component
import './App.css' //importing css file for styling


class App extends Component { //creating react component class called App
  render() { //calling the render method and returning a <div> with <h1> title and GamesList component
    return (
      <div>
        <h1>Game Reviews</h1>
        <GamesList />
      </div>
    )
  }
}

export default App; //exporting the app component to be used on the index.js file