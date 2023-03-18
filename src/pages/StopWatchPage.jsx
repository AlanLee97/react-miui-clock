import React from "react";
import Seconder from "../components/seconder/Seconder";
import './style.scss';

export default class StopWatchPage extends React.Component {
  render() {
    return (
      <div className="page--stopwatch">
        <Seconder />
      </div>
    )
  }
}