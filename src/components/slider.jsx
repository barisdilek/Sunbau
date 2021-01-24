import React, { Component } from 'react'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export class Slider extends Component {
    render() {
    return (
        <div className="slide-container">
             <Fade>
                {this.props.data ? this.props.data.slider.map((d, i) => 
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={`img/slider/${d}`} alt=""/>
                        </div>
                    </div>  
                ) : 'loading'}
            </Fade>  
        </div>
    );
    }
}
    
export default Slider
