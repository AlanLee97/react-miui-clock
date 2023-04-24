import React from "react";
import NumberSlideSelector from "../components/number-slide-selector/NumberSlideSelector";
import eventbus from '../utils/eventbus';
import './style.scss';

export default class TimerPage extends React.Component {

  state = {
    timeStartMode: false
  }

  constructor(props = {}) {
    super(props);

    eventbus.on('timer:start', () => {
      this.setState({
        timeStartMode: true
      })
      console.log('timer:start');
    })
    eventbus.on('timer:pause', () => {
      this.setState({
        timeStartMode: false
      })
      console.log('timer:pause');
    })
  }

  onSelectedHour = val => {
    console.log('onSelectedHour', val);
  }

  onSelectedMin = val => {
    console.log('onSelectedMin', val);
  }

  onSelectedSec = val => {
    console.log('onSelectedSec', val);
  }

  setClassName = (name = '') => {
    if(typeof name === 'string') return name;
    if(Array.isArray(name)){
      return name.join(' ').trim()
    }
  }

  render() {
    const { timeStartMode } = this.state;
    return (
      <div className="page--timer">
        <section className={this.setClassName(["time-selector-wrapper", timeStartMode ? 'hide' : ''])}>
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

        <section className={this.setClassName(["time-start-wrapper", timeStartMode ? '' : 'hide'])}>
          <div className="circle"></div>
        </section>
      </div>
    )
  }
}