import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search-bar';
import WeatherList from './components/weather-list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
