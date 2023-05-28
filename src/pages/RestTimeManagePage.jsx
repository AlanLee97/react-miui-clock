import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from '../components';
import "./style.scss";

function IconBack() {
  return (
    <svg
      t="1685181293877"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5876"
      width="22"
      height="22"
    >
      <path
        d="M389.802667 278.186667l45.226666 45.269333-184.533333 184.576h673.536v64H250.453333l187.733334 187.733333-45.226667 45.269334L128 540.074667 389.802667 278.186667z"
        fill="#2A2A30"
        p-id="5877"
      />
    </svg>
  );
}

function IconSetting() {
  return (
    <svg t="1685250055307" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4888" width="22" height="22"><path d="M463.68 59.52a96 96 0 0 1 96 0l320 184.64a96 96 0 0 1 48.32 83.2v369.28a96 96 0 0 1-48 83.2l-320 184.64a96 96 0 0 1-96 0l-320-184.64a96 96 0 0 1-48-83.2v-369.28a96 96 0 0 1 47.68-83.2z m64.32 55.68a32 32 0 0 0-32 0l-320 184.64a32 32 0 0 0-16 27.52v369.28a32 32 0 0 0 16 27.84l320 184.32a32 32 0 0 0 32 0l320-184.64a32 32 0 0 0 16-27.52v-369.28a32 32 0 0 0-16-27.84zM396.8 397.632a160 160 0 0 1 156.48-40.192A160.064 160.064 0 0 1 512 672a166.72 166.72 0 0 1-41.28-5.44A160 160 0 0 1 396.8 397.632zM595.2 464a96 96 0 1 0-166.272 96A96 96 0 0 0 595.2 464z" fill="#515151" p-id="4889" /></svg>
  );
}

function IconMoon() {
  return (
    <svg t="1685252303536" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7110" width="18" height="18"><path d="M618.496 111.616c9.216 34.304 14.336 70.656 14.336 108.032 0 228.352-184.832 413.184-413.184 413.184-37.376 0-73.728-5.12-108.544-14.336 47.616 175.616 207.872 305.152 398.848 305.152 228.352 0 413.184-184.832 413.184-413.184 0-190.976-129.024-351.232-304.64-398.848z" fill="#920cf2" p-id="7111"></path></svg>
  );
}

function IconSun() {
  return (
    <svg t="1685252432210" className="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8225" width="18" height="18"><path d="M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#FFC445" p-id="8226"></path><path d="M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z" fill="#FFC445" p-id="8227"></path></svg>
  );
}

function Header(props = {}) {
  const navigate = useNavigate();
  return (
    <section className="cpn--header">
      <div onClick={() => navigate(-1)}><IconBack /></div>
      <IconSetting />
    </section>
  );
}

function TimeSettingModule(props = {}) {
  return (
    <div className="cpn--time-setting-module">
      <div className="switch-row">
        <div className="">
          <h1 className="title">起床响铃</h1>
          <div className="desc">开启后，起床时间将会响铃</div>
        </div>
        <Switch />
      </div>

      <div className="time-setting-row">
        <div className="col-item">
          <div className="title"><IconMoon /> <span className="text">就寝时间</span></div>
          <div className="time">00:00</div>
        </div>
        <div className="col-item">
          <div className="title"><IconSun /> <span className="text">起床时间</span></div>
          <div className="time">07:00</div>
        </div>
      </div>
    </div>
  );
}

function SleepAnalyseModule(props = {}) {
  return (
    <div className="cpn--sleep-analyse-module">
      <div className="title">睡眠分析</div>
      <div className="graph-area">
        开启后，将会自动帮您记录睡眠数据
      </div>
      <div className="time-stamp">
        <div>05/22</div>
        <div>05/25</div>
        <div>05/28</div>
      </div>
      <div className="tip-bar">
        <div>
          <h1 className="title">睡眠跟踪</h1>
          <div className="desc">开启后，将会自动帮您记录睡眠情况</div>
        </div>
        <div className="btn-open">去开启</div>
      </div>
    </div>
  );
}

export default class SelectCityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page-wrapper">
        <div className="page--rest-time-magnage">
          <Header />
          <div className="page-content">
            <div className="page-title">
              作息
            </div>
            <TimeSettingModule />
            <SleepAnalyseModule />
          </div>
        </div>
      </div>
    );
  }
}
