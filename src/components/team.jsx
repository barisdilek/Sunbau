import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Team extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:3}
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
        <div id="team">
          <div className="container">
            <h2>Team</h2>
            <div className="row">
              {this.state.sunbau.Team
                ? this.state.sunbau.Team.map((d, i) => (
                    <div  key={`divTeam-${i}`} className="col-md-4 col-sm-12 team">
                      <div className="thumbnail">
                        {" "}
                        <img src={`img/team/${d.img}`}  alt="..." className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p className="wrapword">{d.job}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
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

export default Team;
