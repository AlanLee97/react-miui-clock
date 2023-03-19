import React, { forwardRef } from "react";
import Seconder from "../components/seconder/Seconder";
import eventbus from "../utils/eventbus";
import './style.scss';

const SeconderForward = forwardRef((props, ref) => <Seconder cpnRef={ref} {...props} />)

export default class StopWatchPage extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    this.state = {
      seconderRef: null,
    }
  }

  seconderRef = null;

  componentDidMount() {
    console.log('seconderRef', this.seconderRef);
    eventbus.on('seconder:start', this.onSeconderStart);
    eventbus.on('seconder:pause', this.onSeconderPause);
    eventbus.on('seconder:clear', this.onSeconderClear);
  }

  componentWillUnmount() {
    eventbus.off('seconder:start', this.onSeconderStart);
    eventbus.off('seconder:start', this.onSeconderPause);
  }

  onSeconderStart = e => {
    this.seconderRef.start();
  }

  onSeconderPause = e => {
    this.seconderRef.pause();
  }

  onSeconderClear = e => {
    this.seconderRef.clear();
  }

  render() {
    return (
      <div className="page--stopwatch">
        <SeconderForward ref={elRef => this.seconderRef = elRef} />
      </div>
    )
  }
}