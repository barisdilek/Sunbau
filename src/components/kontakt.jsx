import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Kontact extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:4, menuType:1}
  }
  getSunbau() {
    this.setState({sunbau : JsonData})
  }

  componentDidMount() {
    this.getSunbau();
  }
  render() {
    return (
      <div >
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
        <div id="kontakt" class="pageSection topPageSection kontaktSection">
          <div className="container" >
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Möchten Sie mehr erfahren?</h2>
                  <p>
                  Wir arbeiten stets an verschiedenen Projekten – meistens, um für unsere Kunden das Beste zu erreichen. Von Zeit zu Zeit experimentieren wir jedoch auch an völlig neuen Konzepten und Ideen.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-0">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  {this.state.sunbau.Kontakt
                    ? this.state.sunbau.Kontakt.addresses.map((d, i) => (
                        <p key={`divhome-${i}`}>
                          <span>
                            <i className="fa fa-map-marker"></i> {d.title}
                          </span>
                          <a href={d.addressLink}>{d.addressline1}<br/>
                          {d.addressline2}</a>
                        </p>
                      ))
                    : "loading"}
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> {this.state.sunbau.Kontakt ? this.state.sunbau.Kontakt.phoneTitle : "loading"}
                    </span>{" "}
                    {this.state.sunbau.Kontakt ? <a href={"tel:"+this.state.sunbau.Kontakt.phone}>{this.state.sunbau.Kontakt.phone}</a> : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> {this.state.sunbau.Kontakt ? this.state.sunbau.Kontakt.emailTitle : "loading"}
                    </span>{" "}
                    {this.state.sunbau.Kontakt ? <a href={"mailto:"+this.state.sunbau.Kontakt.email}>{this.state.sunbau.Kontakt.email}</a> : "loading"}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
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
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Kontact;
