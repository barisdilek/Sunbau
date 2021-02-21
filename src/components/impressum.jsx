import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Impressum extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:6, menuType:3}
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
        <div id="impressum" class="pageSection impressumSection">
          <div className="container">
            <h2>Impressum</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-0">
                {this.state.sunbau.Impressum
                        ? this.state.sunbau.Impressum.contents.map((d, i) => (
                            <p key={`divhome-${i}`}>
                              {d.content}
                            </p>
                          ))
                        : "loading"}
                
                <br/>{" "}
                <br/>{" "}
                <br/>{" "}
                <p>
                  Bildnachweis:
                  {this.state.sunbau.Impressum ? <a href={"mailto:"+this.state.sunbau.Impressum.bildnachweis.link1} target="_blank" rel="noreferrer noopener">{this.state.sunbau.Impressum.bildnachweis.linkTitle1}</a> : "loading"}
                  {" "}on{" "}
                  {this.state.sunbau.Impressum ? <a href={"mailto:"+this.state.sunbau.Impressum.bildnachweis.link2} target="_blank" rel="noreferrer noopener">{this.state.sunbau.Impressum.bildnachweis.linkTitle2}</a> : "loading"},{" "}
                  {this.state.sunbau.Impressum ? <a href={"mailto:"+this.state.sunbau.Impressum.bildnachweis.link3} target="_blank" rel="noreferrer noopener">{this.state.sunbau.Impressum.bildnachweis.linkTitle3}</a> : "loading"}
                  {" "}on {" "}
                  {this.state.sunbau.Impressum ? <a href={"mailto:"+this.state.sunbau.Impressum.bildnachweis.link4} target="_blank" rel="noreferrer noopener">{this.state.sunbau.Impressum.bildnachweis.linkTitle4}</a> : "loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Impressum;
