import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class StellenAnZeigen extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:5}
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
        <div id="stellenanzeigen" >
          <div className="container">
            <h2>Lernen Sie uns kennen</h2>
            <div className="row">
              {this.state.sunbau.StellenAnzeigen
                ? this.state.sunbau.StellenAnzeigen.map((d, i) => (
                    <div  key={`div-sa${i}`} className="col-md-3 col-sm-0 stellenanzeigen">
                      <div className="thumbnail">
                        {" "}
                        <img src={`img/stellenanzeigen/${d.img}`}  alt="..." className="stellenanzeigen-img" />
                        <div className="caption">
                          <h4>{d.title}</h4>
                          <p className="wrapword">{d.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
        <Footernavigation  data={this.state.menuItem}/>
      </div>
    );
  }
}

export default StellenAnZeigen;
