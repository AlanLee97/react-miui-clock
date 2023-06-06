import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';

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

function IconArrowRight() {
  return (
    <svg t="1686067239249" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3300" width="20" height="20"><path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#bfbfbf" p-id="3301"></path></svg>
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

function SettingItem(props = {}) {
  const {
    name, nameDesc, content, title, showBorder = false 
  } = props;
  return (
    <section className="cpn--setting-item">
      {
        title && (
          <div className="setting-item-title">{title}</div>
        )
      }
      <div className="setting-item-row">
        <h1 className="setting-name">
          <div>{name}</div>
          {
            nameDesc && (
              <div className="name-desc">{nameDesc}</div>
            )
          }
        </h1>
        <div className="setting-content"><span className="content-text">{content}</span> <IconArrowRight /></div>
      </div>
      {
        showBorder && (
          <div className="border-bottom"></div>
        )
      }
    </section>
  );
}

export default class SettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="page page--setting">
        <div className="page-content-wrapper">
          <Header />
          <div className="page-content no-scrollbar">
            <div className="page-title">
              设置
            </div>

            <div className="no-scrollbar">
              <SettingItem name="系统时间设置" title="时间设置" showBorder />

              <SettingItem name="闹钟铃声" content="元素动态铃声" title="常规设置" />
              <SettingItem name="计时结束铃声" content="电子计时器" />
              <SettingItem name="响铃音量" nameDesc="可控制闹钟与计时器响铃音量" />
              <SettingItem name="响铃时长" nameDesc="可控制闹钟与计时器响铃时长" />
              <SettingItem name="更多闹钟设置" showBorder />

              <SettingItem name="法定节假日更新" title="其他设置" />
              <SettingItem name="隐私设置" />

            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
