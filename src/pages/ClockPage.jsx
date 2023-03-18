import React from "react";
import DisplayTime from "../components/display-time/DisplayTime";
import './style.scss';

export default class ClockPage extends React.Component {
  render() {
    return (
      <div className="page--clock">
        <DisplayTime />
      </div>
    )
  }
}