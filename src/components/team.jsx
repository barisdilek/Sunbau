import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Team extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:3, menuType:1}
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
        {this.props.data ?  this.props.data.menuType!==0 ? 
          <div>
            <Headernavigation data={this.props.data}/> 
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
          </div>
          : 
            "" 
          : 
          <div>
            <Headernavigation data={this.navState.menuItem}/>
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
          </div>
        }
        <div id="team" class="pageSection topPageSection teamSection">
          <div className="container">
            
            <div className="row">
              <div className="section-title">
                <h2>Team</h2>
              </div>
              {this.state.sunbau.Team
                ? this.state.sunbau.Team.map((d, i) => (
                    <div  key={`divTeam-${i}`} className="col-md-4 col-sm-12 team">
                      <div className="thumbnail">
                        {" "}
                        <img src={`img/team/${d.img}`}  alt="..." className="team-img" />
                        {/* <div className="caption">
                          <h4>{d.name}</h4>
                          <p className="wrapword">{d.job}</p>
                        </div> */}
                      </div>
                    </div>
                  ))
                : "loading"}
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
            </div>
          </div>
        </div>
        
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Team;
