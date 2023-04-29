import React from "react";
import NumberSlideSelector from "../components/number-slide-selector/NumberSlideSelector";
import CountDown from "../components/count-down/CountDown";
import eventbus from '../utils/eventbus';
import './style.scss';

export default class TimerPage extends React.Component {

  state = {
    timeStartMode: false,
    opt: ''
  }

  constructor(props = {}) {
    super(props);

    eventbus.on('timer:started', () => {
      this.setState({
        timeStartMode: true
      })
      console.log('timer:started');
    })
    eventbus.on('timer:unstarted', () => {
      this.setState({
        timeStartMode: false,
        opt: 'stop'
      })
      console.log('timer:unstarted');
    })

    eventbus.on('timer:opt:pause', () => {
      this.setState({
        opt: 'pause'
      })
      console.log('timer:pause');
    })

    eventbus.on('timer:opt:reset', () => {
      this.setState({
        opt: 'reset'
      })
      console.log('timer:reset');
    })

    eventbus.on('timer:opt:start', () => {
      this.setState({
        opt: 'start'
      })
      console.log('timer:start');
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
    const { timeStartMode, opt } = this.state;
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

        {
          timeStartMode && (
            <section className="time-start-wrapper">
              <CountDown hour={1} min={2} sec={30} opt={opt} />
            </section>
          )
        }
      </div>
    )
  }
}