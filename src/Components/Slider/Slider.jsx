import React, { useState } from "react";
import "./Slider.scss";
import { sliderData } from "./Slider-data.js";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider">
      <FaAngleRight className="arrow next" />
      <FaAngleLeft className="arrow prev" />

      {sliderData.map((slider, index) => {
        return <></>;
      })}
    </div>
  );
};

export default Slider;
