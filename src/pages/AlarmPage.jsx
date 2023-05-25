import React from 'react';
import { connect } from 'react-redux';
import {
  AlarmItem,
  Mask,
  TimeSettingPanel,
} from '../components';
import './style.scss';
import { setAlarmData } from '../store/alarmPageReducer';

class AlarmPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('alarmPage props', props);
    this.state = {
      showMask: false,
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
    const list = [...this.props.alarmData];
    list.push({
      time: '08:00',
      triggerMode: '每天',
    });
    this.props.setAlarmData(list);

    this.setMaskVisible(false);
  };

  render() {
    const { showMask } = this.state;
    const { alarmData, restData, } = this.props;
    return (
      <div className="page--alarm">
        <Mask show={showMask} closeOnMask setVisible={this.setMaskVisible}>
          <TimeSettingPanel onComplete={this.onTimeSettingComplete} />
        </Mask>

        <div className="group">
          {
            restData && restData.length > 0 ? (
              <>
                <div className="group-title">作息</div>
                <div className="rest-data">
                  {
                  restData.map((item, i) => (
                    <div key={`${item.time}_${i}`} onClick={this.onClickItem}>
                      <AlarmItem />
                    </div>
                  ))
                }
                </div>
              </>
            ) : null
          }
        </div>

        <div className="group">
          {
            alarmData && alarmData.length > 0 ? (
              <>
                <div className="group-title">闹钟</div>
                <div className="alarm-data">
                  {
                  alarmData.map((item, i) => (
                    <div key={`${item.time}_${i}`} onClick={this.onClickItem}>
                      <AlarmItem usingSwitch />
                    </div>
                  ))
                }
                </div>
              </>
            ) : null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    alarmData,
    restData
  } = state.alarmPage;
  return {
    alarmData,
    restData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAlarmData: (val) => dispatch(setAlarmData(val))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlarmPage);
