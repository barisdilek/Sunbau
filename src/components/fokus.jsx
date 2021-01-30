import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Fokus extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:2}
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
        <Headernavigation data={this.state.menuItem}/>
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <div id="fokus">
          <div className="container">
            <h2>Fokus</h2>
            {this.state.sunbau.Fokus
            ? this.state.sunbau.Fokus.map((d, i) => (
                <div key={`divfokus-${i}`} className="row">
                  <div className="col-md-5 col-md-offset-0">
                    <div className="fokus-text">
                      <h3>{d.title}</h3>
                      <p className="wrapword">{d.desc}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-md-offset-2"> <div className="thumbnail"> <img src={`img/fokus/${d.img}`}  alt="..." className="fokus-img" /> </div></div>
                </div>
              ))
            : "loading"}

          </div>
        </div>
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <Footernavigation  data={this.state.menuItem}/>
      </div>
    );
  }
}

export default Fokus;
