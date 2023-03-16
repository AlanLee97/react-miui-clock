import React from "react";
import AlarmItem from "../components/alarm-item/AlarmItem";
import './style.scss';
export default class AlarmPage extends React.Component {
  state = {
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
    ]
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { alarmData, restData } = this.state;
    return (
      <div className="page--alarm">


        <div className="group">
          <div className="group-title">作息</div>
          {
            restData && restData.length > 0 ? (
              <div className="rest-data">
                {
                  restData.map((item, i) => (
                    <div key={item.time + '_' + i}>
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
                    <div key={item.time + '_' + i}>
                      <AlarmItem usingSwitch={true} />
                    </div>
                  ))
                }
              </div>
            ) : null
          }
        </div>


      </div>
    )
  }
}