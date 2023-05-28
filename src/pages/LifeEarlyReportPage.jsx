import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from '../components';
import "./style.scss";
import { appendZero } from "../utils";

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

function Header(props = {}) {
  const navigate = useNavigate();
  return (
    <section className="cpn--header">
      <div onClick={() => navigate(-1)}><IconBack /></div>
    </section>
  );
}

function SettingModule(props = {}) {
  return (
    <div className="cpn--setting-module">
      <div className="switch-row">
        <div className="">
          <h1 className="title">开启生活早报</h1>
          <div className="desc">开启后，关闭4:00-10:00的第一个闹钟，生活早报将为您提供当日天气信息</div>
        </div>
        <Switch />
      </div>

      <div className="switch-row">
        <div className="">
          <h1 className="title">早间听新闻</h1>
          <div className="desc">开启后，生活早报将为您展示新闻卡片</div>
        </div>
        <Switch />
      </div>
    </div>
  );
}

function CountModule(props = {}) {
  const { data = [] } = props;
  return (
    <div className="cpn--count-module">
      <div className="title">起床历史统计</div>
      <div className="list-wrapper">
        {
          data.map((item, index) => {
            return (
              <CountItem key={index} data={item} />
            );
          })
        }
      </div>
    </div> 
  );
}

function CountItem(props = {}) {
  const { data = {} } = props;
  return (
    <div className="cpn--count-item">
      <div className="time"><span className="dot" /> {data?.date?.year}年{data?.date?.month}月{data.date.day}日</div>
      <div className="detail">
        <div className="data-box">
          <div className="tip">起床时间</div>
          <div className="data">{appendZero(data.date?.hour)}:{appendZero(data.date?.min)}</div>
        </div>
        <div className="data-box">
          <div className="tip">击败米粉</div>
          <div className="data">{data.data?.beat}</div>
        </div>
        <div className="data-box">
          <div className="tip">累计早起</div>
          <div className="data">{data.data?.accumulate}天</div>
        </div>
      </div>
    </div>
  );
}

export default class LifeEarlyReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countList: [
        {
          date: {
            year: 2023,
            month: 5,
            day: 26,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 199
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 25,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 198
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 24,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 197
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 23,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 196
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 22,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 195
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 21,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 194
          }
        },
        {
          date: {
            year: 2023,
            month: 5,
            day: 20,
            hour: 7,
            min: 0
          },
          data: {
            beat: '47',
            accumulate: 193
          }
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page-wrapper">
        <div className="page--life-early-report">
          <Header />
          <div className="page-content">
            <SettingModule />
            <CountModule data={this.state.countList} />
          </div>
        </div>
      </div>
    );
  }
}
