import React, { Component } from 'react'
import Home from './components/Home';
import JsonData from './data/data.json';
import './App.css';

export class App extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:1}
  }
  getSunbau() {
    this.setState({sunbau : JsonData})
  }

  componentDidMount() {
    this.getSunbau();
  }
  render() {
    return (
      <div>
        <Home data={this.state}/>
      </div>
    );
  }
}

export default App;
