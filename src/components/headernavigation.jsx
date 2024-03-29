import React, { Component } from 'react'
import { Link as  Link1} from "react-router-dom"; 
import { Link as Link2 } from "react-scroll"; //, animateScroll as scroll
import $ from 'jquery';

export class Headernavigation extends Component {

  componentDidMount() {
    let selectedItem = this.props.data.selectedItem;
    //let menuType = this.props.data.menuType;
    //alert(selectedItem + ' : ' + menuType )
    let selectedItemName = "home"
    switch(selectedItem) {
      case 1:
      {
        selectedItemName = "home";
        break;
      }
      case 2:
      {
        selectedItemName = "fokus";
        break
      }
      case 3:
      {
        selectedItemName = "team";
        break
      }
      case 4:
      {
        selectedItemName = "kontakt";
        break
      }
      case 5:
      {
        selectedItemName = "stellenanzeigen";
        break
      }
      default : {
        selectedItemName = "home";
        break
      }
    }
    $( document ).ready(function() {
      //alert(selectedItemName)
      if (selectedItem>=1 && selectedItem<=5)
      {
        var bt =  document.getElementById(selectedItemName + 'Click')
        //debugger;
        bt.click();
      }
    });
    //alert(this.props.data ? this.props.data.selectedItem : "loading")
  }


  render() {
    return (
          <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            {/* <div className="container"> */}
              <div className="col-md-4 col-md-offset-0 logo">
                  <Link2 id="pageTop" href="#page-top" className="navbar-brand page-scroll" to="home" spy={true} smooth={true}  duration={1000}>
                  <img src="./img/logo.jpg" alt="" className="navbar-brand-img" />
                  </Link2>
                   <br/><span>{"“Wir schaffen Verbindungen”"}</span>
              </div>
              <div className="col-md-12 col-sm-0 col-md-offset-0">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                  </button>
                </div>
              {/* </div> */}
              <div className="col-md-12 ol-sm-12 col-md-offset-6">
                <div className="  collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-left">
                    {
                        this.props.data ? 
                          this.props.data.selectedItem === 1 || this.props.data.menuType === 2 ? 
                              <li>
                                <Link2 id="homeClick" href="#home" className="page-scroll topClick" to="home" spy={true} smooth={true}  duration={1000}>
                                  Home
                                </Link2>
                              </li>
                            : 
                              this.props.data.menuType === 3 ? 
                                <li>
                                  <Link1 id="homeClick" href="#home" className="page-scroll topClick" to="." duration={1000}>
                                    Home
                                  </Link1>
                                </li>
                                :
                                <li>
                                  <Link1 id="homeClick" href="#home" className="page-scroll topClick" to="/home" duration={1000}>
                                    Home
                                  </Link1>
                                </li>
                        : 
                        "loading"
                    }
                    {
                      
                        this.props.data ? 
                          this.props.data.selectedItem === 2 || this.props.data.menuType === 2 ? 
                              <li>
                                <Link2 id="fokusClick" href="#fokus" className="page-scroll topClick" to="fokus" spy={true} smooth={true}  duration={1000}>
                                  Fokus
                                </Link2>
                              </li>
                            : 
                              this.props.data.menuType === 3 ? 
                                <li>
                                  <Link1 id="fokusClick" href="#fokus" className="page-scroll topClick" to="." duration={1000}>
                                  Fokus
                                  </Link1>
                                </li>
                                :
                                <li>
                                  <Link1 id="fokusClick" href="#fokus" className="page-scroll topClick" to="fokus" duration={1000}>
                                    Fokus
                                  </Link1>
                                </li>
                        : 
                        "loading"
                    }
                    {
                        this.props.data ? 
                          this.props.data.selectedItem === 3 || this.props.data.menuType === 2 ? 
                              <li>
                                <Link2 id="teamClick" href="#team" className="page-scroll topClick" to="team" spy={true} smooth={true}  duration={1000}>
                                  Team
                                </Link2>
                              </li>
                            : 
                              this.props.data.menuType === 3 ? 
                                <li>
                                  <Link1 id="teamClick" href="#team" className="page-scroll topClick" to="." duration={1000}>
                                    Team
                                  </Link1>
                                </li>
                                :
                                <li>
                                  <Link1 id="teamClick" href="#team" className="page-scroll topClick" to="team"   duration={1000}>
                                    Team
                                  </Link1>
                                </li>
                        : 
                        "loading"
                    }
                    {
                        this.props.data ? 
                          this.props.data.selectedItem === 4 || this.props.data.menuType === 2 ? 
                              <li>
                                <Link2 id="kontaktClick" href="#kontakt" className="page-scroll topClick" to="kontakt" spy={true} smooth={true}  duration={1000}>
                                  Kontakt
                                </Link2>
                              </li>
                            : 
                              this.props.data.menuType === 3 ? 
                                <li>
                                  <Link1 id="kontaktClick" href="#kontakt" className="page-scroll topClick" to="." duration={1000}>
                                    Kontakt
                                  </Link1>
                                </li>
                                :
                                <li>
                                  <Link1 id="kontaktClick" href="#kontakt" className="page-scroll topClick" to="kontakt"   duration={1000}>
                                    Kontakt
                                  </Link1>
                                </li>
                        : 
                        "loading"
                    }
                    {
                        this.props.data ? 
                          this.props.data.selectedItem === 5 || this.props.data.menuType === 2 ? 
                              <li>
                                <Link2 id="stellenanzeigenClick" href="#stellenanzeigen" className="page-scroll topClick" to="stellenanzeigen" spy={true} smooth={true}  duration={1000}>
                                  Stellenanzeigen
                                </Link2>
                              </li>
                            : 
                              this.props.data.menuType === 3 ? 
                                <li>
                                  <Link1 id="stellenanzeigenClick" href="#stellenanzeigen" className="page-scroll topClick" to="." duration={1000}>
                                    Stellenanzeigen
                                  </Link1>
                                </li>
                                :
                                <li>
                                  <Link1 id="stellenanzeigenClick" href="#stellenanzeigen" className="page-scroll topClick" to="stellenanzeigen"   duration={1000}>
                                    Stellenanzeigen
                                  </Link1>
                                </li>
                        : 
                        "loading"
                    }
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    )
  };
}

export default Headernavigation;
