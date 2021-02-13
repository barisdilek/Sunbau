import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import { Link } from "react-scroll"; //, animateScroll as scroll
import JsonData from '../data/data.json';
import '../App.css';


export class Home extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:1, menuType:1}
  }
  getSunbau() {
    this.setState({sunbau : JsonData})
  }

  componentDidMount() {
    //let menuType = this.props.data.menuType
    this.getSunbau();
    //alert(menuType);
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
        <header id="home" class="pageSection topPageSection homeSection">
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
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="thumbnail">
                  <img  src={`img/intro-bg.jpg`}  alt="..." className="intro-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 arrow-text">
              <div className="thumbnail">
                <Link href="#subHeader"  className="arrow" to="subHeader" spy={true} smooth={true} duration={1000}>
                  <img  src={`img/down.png`}  alt="..." className="arrow-img" width="50"/>
                  {/* &#11167; */}
                </Link>
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
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Home;
