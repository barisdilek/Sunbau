import React, { Component } from 'react'
import { Link as Link1 } from "react-router-dom"; //, animateScroll as scroll
import { Link as Link2 } from "react-scroll"; //, animateScroll as scroll

export class Footernavigation extends Component {
  render() {
    return(
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-12 footerMenu">
              {
                  this.props.data ? 
                    this.props.data.selectedItem === 6 || this.props.data.menuType === 2 ? 
                          <Link2 id="impressumClick" href="#impressum" className="page-scroll" to="impressum" spy={true} smooth={true}  duration={1000}>
                          Impressum
                          </Link2>
                      : 
                        this.props.data.menuType === 3 ? 
                          
                          <Link1 id="impressumClick" href="#impressum" className="page-scroll" to="." duration={1000}>
                            Impressum
                          </Link1>
                        
                        :
                          <Link1 id="impressumClick" href="#impressum" className="page-scroll" to="/impressum" duration={1000}>
                            Impressum
                          </Link1>
                          
                  : 
                  "loading"
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-12 footerMenu">
              {
                  this.props.data ? 
                    this.props.data.selectedItem === 7 || this.props.data.menuType === 2 ? 
                          <Link2 id="datenSchutzClick" href="#datenschutz" className="page-scroll" to="datenschutz" spy={true} smooth={true}  duration={1000}>
                          DatenSchutz
                          </Link2>
                      : 
                        this.props.data.menuType === 3 ? 
                          
                          <Link1 id="datenSchutzClick" href="#datenschutz" className="page-scroll" to="." duration={1000}>
                            DatenSchutz
                          </Link1>
                        :
                          <Link1 id="datenSchutzClick" href="#datenschutz" className="page-scroll" to="/datenschutz" duration={1000}>
                            DatenSchutz
                          </Link1>
                  : 
                  "loading"
              }
            </div>
          </div> 
        </div>
        <div className="container ">
          <div className="row text-center">
            <div className="col-md-12 col-md-offset-0">
              <p>
                &copy; 2021 Copyright. All rights reserved | Designed by <a href="https://www.facebook.com/sanatolyebodrum/">@sanatolyebodrum</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// function FooternavigationFn ()
// {
//   return (
      
//   );
// }

export default Footernavigation;