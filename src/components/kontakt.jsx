import React, { Component } from "react";
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Kontact extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:4}
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
        <Headernavigation data={this.state.menuItem}/>
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <div id="kontakt">
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
                          {d.address}
                        </p>
                      ))
                    : "loading"}
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {this.state.sunbau.Kontakt ? this.state.sunbau.Kontakt.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {this.state.sunbau.Kontakt ? this.state.sunbau.Kontakt.email : "loading"}
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
        <Footernavigation  data={this.state.menuItem}/>
      </div>
    );
  }
}

export default Kontact;
