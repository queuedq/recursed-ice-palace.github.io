import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import chroma from 'chroma-js'
import { screenshots, palette } from '../config';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="carousel">
        <Slider {...settings}>
          {screenshots.map(src => (
            <div className="image-container">
              <img src={src} width="960" height="720"></img>
            </div>
          ))}
        </Slider>
        <style jsx global>{`
          .slick-track * {
            line-height: 0;
          }
          .slick-prev, .slick-next {
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            width: 32px;
            height: 64px;
            padding: 0;
            margin: auto 0;
            background-color: transparent;
            background-size: contain;
            font-size: 0;
          }
          .slick-prev:focus, .slick-next:focus {
            outline-color: ${palette.ice.dark};
          }
          .slick-prev {
            left: -32px;
            background-image: url("/static/arrow_left.png");
            z-index: 1;
          }
          .slick-prev:hover {
            background-image: url("/static/arrow_left_hover.png");
          }
          .slick-prev:active {
            background-image: url("/static/arrow_left_active.png");
          }
          .slick-next {
            right: -32px;
            background-image: url("/static/arrow_right.png");
          }
          .slick-next:hover {
            background-image: url("/static/arrow_right_hover.png");
          }
          .slick-next:active {
            background-image: url("/static/arrow_right_active.png");
          }
          .slick-dots {
            position: absolute;
            display: flex!important;
            margin: 8px auto;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 0;
            line-height: 0;
            z-index: 1;
          }
          .slick-dots button {
            position: relative;
            padding: 0;
            margin: 0 8px;
            width: 16px;
            height: 8px;
            font-size: 0;
            background: ${palette.ice.base};
          }
          .slick-dots button:focus {
            outline-color: ${palette.ice.dark};
          }
          .slick-active button {
            background: ${palette.ice.darkest};
          }
        `}</style>
        <style jsx>{`
          .carousel {
            max-width: 600px;
            padding: 16px 16px;
            margin: -16px auto 0 auto;
          }
          .image-container {
            padding: 12px 12px 16px 12px;
          }
          img {
            width: 100%;
            height: auto;
            box-shadow: 0px 4px 12px ${chroma(palette.ice.darkest).alpha(0.5)},
              0px 1px 4px ${chroma(palette.ice.darkest).alpha(0.2)};
          }
          .image-container:focus {
            outline: 0;
          }
        `}</style>
      </div>
    )
  }
}
