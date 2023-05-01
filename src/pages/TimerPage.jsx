import React from "react";
import NumberSlideSelector from "../components/number-slide-selector/NumberSlideSelector";
import CountDown from "../components/count-down/CountDown";
import eventbus from '../utils/eventbus';
import './style.scss';

export default class TimerPage extends React.Component {

  state = {
    timeStartMode: false,
    opt: '',
    timeData: {
      hour: 0,
      min: 0,
      sec: 0,
    },
    refresh: false

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
        opt: 'reset',
        timeData: {
          hour: 0,
          min: 0,
          sec: 0
        },
        refresh: true
      }, () => {
        this.setState({
          refresh: false
        })
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
    this.setState({
      timeData: {
        ...this.state.timeData,
        hour: +val
      }
    })
  }

  onSelectedMin = val => {
    console.log('onSelectedMin', val);
    this.setState({
      timeData: {
        ...this.state.timeData,
        min: +val
      }
    })
  }

  onSelectedSec = val => {
    console.log('onSelectedSec', val);
    this.setState({
      timeData: {
        ...this.state.timeData,
        sec: +val
      }
    })
  }

  setClassName = (name = '') => {
    if(typeof name === 'string') return name;
    if(Array.isArray(name)){
      return name.join(' ').trim()
    }
  }

  render() {
    const { timeStartMode, opt, timeData, refresh } = this.state;
    console.log('timeData', timeData);
    return (
      <div className="page--timer">
        { !refresh &&
        <section className={this.setClassName(["time-selector-wrapper", timeStartMode ? 'hide' : ''])}>
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector current={0} start={0} end={23} unit={'时'} onSelected={this.onSelectedHour} />
          </div>
          <div className="single-time-selector-wrapper middle-item">
            <NumberSlideSelector current={0} start={0} end={59} unit={'分'} onSelected={this.onSelectedMin} />
          </div>
          <div className="single-time-selector-wrapper">
            <NumberSlideSelector current={0} start={0} end={59} unit={'秒'} onSelected={this.onSelectedSec} />
          </div>
        </section>
        }
        {
          timeStartMode && (
            <section className="time-start-wrapper">
              <CountDown hour={timeData.hour} min={timeData.min} sec={timeData.sec} opt={opt} />
            </section>
          )
        }
      </div>
    )
  }
}