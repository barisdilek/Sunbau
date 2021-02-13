import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class StellenAnZeigen extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:5, menuType:1}
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
        <div id="stellenanzeigen" class="pageSection topPageSection stellenanzeigenSection">
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
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default StellenAnZeigen;
