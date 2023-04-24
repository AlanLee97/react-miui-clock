import React from "react";
import NumberSlideSelector from "../components/number-slide-selector/NumberSlideSelector";
import './style.scss';

export default class TimerPage extends React.Component {
  render() {
    return (
      <div className="page--timer">
        <section className="time-selector-wrapper">
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector start={0} end={23} unit={'时'} />
          </div>
          <div className="single-time-selector-wrapper middle-item">
            <NumberSlideSelector start={0} end={59} unit={'分'} />
          </div>
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector start={0} end={59} unit={'秒'} />
          </div>
        </section>
      </div>
    )
  }
}