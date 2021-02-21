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
    menuItem: {selectedItem:7, menuType:3}
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
        <div id="datenschutz" class="pageSection datenschutzSection">
          <div className="container">
            <h2>Datenschutzerklärung</h2>
            {/* <h3>Hinweise zur Datenverarbeitung im Zusammenhang mit Google Analytics</h3> */}
            <div className="row">
              <div className="col-md-8 col-md-offset-0">

                {this.state.sunbau.Datenxchutz
                      ? this.state.sunbau.Datenxchutz.contents.map((d, i) => (
                          <p key={`divhome-${i}`}>
                            {d.content}
                          </p>
                        ))
                      : "loading"}

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
