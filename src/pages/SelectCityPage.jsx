import React from "react";
import {
  Swiper
} from '../components';
import AlarmPage from './AlarmPage';
import ClockPage from './ClockPage';
import StopWatchPage from './StopWatchPage';
import TimerPage from './TimerPage';
import "./style.scss";

export default class AddAlarmPage extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { alarmData, restData } = this.state;
    return (
      <div className="page-wrapper">
        <div className="page--add-alarm">
          <Swiper>
            <AlarmPage />
            <ClockPage />
            <StopWatchPage />
            <TimerPage />
          </Swiper>
        </div>
      </div>
    );
  }
}
