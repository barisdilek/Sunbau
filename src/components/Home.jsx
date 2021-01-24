import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import { Link } from "react-scroll"; //, animateScroll as scroll
import JsonData from '../data/data.json';
import '../App.css';
import $ from 'jquery';


export class Home extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:1}
  }
  getSunbau() {
    this.setState({sunbau : JsonData})
  }

  componentDidMount() {
    this.getSunbau();
    //alert(this.state.menuItem.selectedItem);
  }
  render() {
    return (
      <div>
        <Headernavigation data={this.state.menuItem}/>
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <header id="home">
          {/* <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-1 col-md-offset-0 intro-text">
                    {" "}
                    {" "}
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div >
            <div className="container">
              <div className="intro">
                <div className="col-md-8 col-md-offset-1">
                  
                  <img  src={`img/intro-bg.jpg`}  alt="..." className="intro-img" />
                  
                </div>
              </div> 
              <div className="row">
                <div className="col-md-8 col-md-offset-6">
                  
                  <Link href="#subHeader"  className="arrow" to="subHeader" spy={true} smooth={true} duration={1000}>
                    &#11167;
                  </Link>
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
          </div>
          <div className="container">
            <div className="row">
            <div id="subHeader">{" "}</div>
              {this.state.sunbau.Main
                ? this.state.sunbau.Main.themen.map((d, i) => (
                    <div  key={`divhome-${i}`} className="col-md-4 col-sm-8 thema">
                      <div className="thumbnail">
                        {" "}
                        <img src={`img/thema/${d.img}`}  alt="..." className="thema-img" />
                        <div className="caption">
                          <h4>{d.title}</h4>
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
          
        </header>
        <Footernavigation  data={this.state.menuItem}/>
      </div>
    );
  }
}

export default Home;
