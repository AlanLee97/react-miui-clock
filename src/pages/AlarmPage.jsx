import React from 'react';
import { connect } from 'react-redux';
import {
  AlarmItem,
  Mask,
  TimeSettingPanel,
} from '../components';
import './style.scss';
import { setAlarmData } from '../store/alarmPageReducer';
import AlarmPageContext from '../contexts/alarmPageContext';

class AlarmPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('alarmPage props', props);
    this.state = {
      showMask: false,
      curAlarmItem: null
    };
  }

  componentDidMount() {

  }

  onClickItem = (item) => {
    this.setState({
      curAlarmItem: item
    });
    this.setMaskVisible(true);
  };

  setMaskVisible = (visible) => {
    this.setState({
      showMask: visible,
    });
  };

  onTimeSettingComplete = (curItem, val) => {
    // console.log('onTimeSettingComplete val', curItem, val);
    const list = JSON.parse(JSON.stringify(this.props.alarmData));
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.id === curItem.id) {
        item.time = val;
        break;
      }
    }
    this.props.setAlarmData(list);
    this.setMaskVisible(false);

    setTimeout(() => {
      const list = JSON.parse(JSON.stringify(this.props.alarmData));
      list.sort((a, b) => a.time.hour - b.time.hour);
      this.props.setAlarmData(list);
    }, 300);
  };

  render() {
    const { showMask } = this.state;
    const { alarmData, restData, } = this.props;
    return (
      <AlarmPageContext.Provider value={this.state}>
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
                      <div key={`item_${i}`} onClick={() => this.onClickItem(item)}>
                        <AlarmItem data={item} />
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
                      <div key={`item_${i}`} onClick={() => this.onClickItem(item)}>
                        <AlarmItem usingSwitch data={item} />
                      </div>
                    ))
                  }
                  </div>
                </>
              ) : null
            }
          </div>
        </div>
      </AlarmPageContext.Provider>
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
