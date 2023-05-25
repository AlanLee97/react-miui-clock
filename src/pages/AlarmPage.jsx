import React from 'react';
import {
  AlarmItem,
  Mask,
  TimeSettingPanel,
} from '../components';
import './style.scss';

export default class AlarmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMask: false,
      alarmData: [
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
        {
          time: '07:00',
          triggerMode: '每天',
        },
      ],
      restData: [
        {
          time: '07:00',
          triggerMode: '每天',
        },
      ],
    };
  }

  componentDidMount() {

  }

  onClickItem = () => {
    this.setMaskVisible(true);
  };

  setMaskVisible = (visible) => {
    this.setState({
      showMask: visible,
    });
  };

  onTimeSettingComplete = () => {
    this.setMaskVisible(false);
  };

  render() {
    const { alarmData, restData, showMask } = this.state;
    return (
      <div className="page--alarm">
        <Mask show={showMask} closeOnMask setVisible={this.setMaskVisible}>
          <TimeSettingPanel onComplete={this.onTimeSettingComplete} />
        </Mask>

        <div className="group">
          <div className="group-title">作息</div>
          {
            restData && restData.length > 0 ? (
              <div className="rest-data">
                {
                  restData.map((item, i) => (
                    <div key={`${item.time}_${i}`} onClick={this.onClickItem}>
                      <AlarmItem />
                    </div>
                  ))
                }
              </div>
            ) : null
          }
        </div>

        <div className="group">
          <div className="group-title">闹钟</div>
          {
            alarmData && alarmData.length > 0 ? (
              <div className="alarm-data">
                {
                  alarmData.map((item, i) => (
                    <div key={`${item.time}_${i}`} onClick={this.onClickItem}>
                      <AlarmItem usingSwitch />
                    </div>
                  ))
                }
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}
