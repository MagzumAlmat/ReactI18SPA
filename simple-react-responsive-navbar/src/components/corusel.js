import "./slick.css";
import "./slick-theme.css";


import React from "react";

import Slider from "react-slick";
import img1 from './002.jpg';

import img2 from './001.jpg';
import img3 from './003.jpg';
import img4 from './004.jpg';
import img5 from './005.jpg';
import img6 from './006.jpg';
import './im.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 20,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 
    return (
      <Slider {...settings}  >
      <div >
      <img src={img1} className='imageResize'/>
      </div>
      <div>
      <img src={img2}className='imageResize' />
        
      </div>
      <div>
      <img src={img3} className='imageResize'/>
      
      </div>
      <div>
      <img src={img4} className='imageResize'/>
     
      </div>
      <div>
      <img src={img5} className='imageResize'/>
        
      </div>
      <div>
      <img src={img6} className='imageResize'/>
      
      </div>
    </Slider>
    );
  }
}


export default SimpleSlider