import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Fokus extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:2, menuType:1}
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
            <br/>{" "}
            <br/>{" "}
          </div> :"" : 
          <div>
            <Headernavigation data={this.navState.menuItem}/>
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
          </div>}
        <div id="fokus" class="pageSection topPageSection fokusSection">
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
        
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Fokus;
