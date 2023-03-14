import React from "react";
import AlarmItem from "../components/alarm-item/AlarmItem";
import './style.scss';

function AddBtn(props) {
  return (
    <div className="cpn--add-btn">
      <div className="icon-wrapper">
        <span>
        <svg t="1678725586122" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6071" width="32" height="32"><path d="M832 448H576V192a64 64 0 0 0-128 0v256H192a64 64 0 0 0 0 128h256v256a64 64 0 1 0 128 0V576h256a64 64 0 1 0 0-128z" p-id="6072" fill="#0c84ff"></path></svg>
        </span>
      </div>
    </div>
  )
  }

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

        <AddBtn />

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
                      <AlarmItem />
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