import React from "react";
import NumberSlideSelector from "../components/number-slide-selector/NumberSlideSelector";
import './style.scss';

export default class TimerPage extends React.Component {

  onSelectedHour = val => {
    console.log('onSelectedHour', val);
  }

  onSelectedMin = val => {
    console.log('onSelectedMin', val);
  }

  onSelectedSec = val => {
    console.log('onSelectedSec', val);
  }

  render() {
    return (
      <div className="page--timer">
        <section className="time-selector-wrapper">
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector start={0} end={23} unit={'时'} onSelected={this.onSelectedHour} />
          </div>
          <div className="single-time-selector-wrapper middle-item">
            <NumberSlideSelector start={0} end={59} unit={'分'} onSelected={this.onSelectedMin} />
          </div>
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector start={0} end={59} unit={'秒'} onSelected={this.onSelectedSec} />
          </div>
        </section>
      </div>
    )
  }
}