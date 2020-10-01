import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import carousel01 from '../Image/carousel1.jpg'
import carousel02 from '../Image/carousel2.jpg'
import carousel03 from '../Image/carousel3.jpg'


const contentStyle = {
    height: '252px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const carouselmodify = {
    paddingTop: '65px',
    width: '100px',
    display: 'block'
};

const container = {
    width: '100%',
}
export default class carousel extends Component {
    render() {
        return (
        <div>            
    <Carousel autoplay style={carouselmodify} style={container}>
    <div>
      <img src={carousel01} alt='carousel01'/>
    </div>
    <div>
    <img src={carousel02} alt='carousel02'/>
    </div>
    <div>
    <img src={carousel03} alt='carousel03'/>
    </div>
  </Carousel>,
        </div>
        )
    }
}
