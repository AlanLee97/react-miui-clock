import { useEffect } from 'react';
import { appendZero, onLongTap } from '../../utils/index.js';
import Switch from '../switch/Switch.jsx';
import './style.scss';

export default function AlarmItem(props = {}) {
  let refEl = null;
  const { usingSwitch = false, data = {} } = props;
  // data = {
  //   time: {hour, min} 
  // }

  useEffect(() => {
    onLongTap(() => {
      console.log('long tap111');
    }, refEl);
  }, [refEl]);

  const handleRef = (el) => {
    refEl = el;
  };
  const onSwitchChange = (val) => {
    console.log('onSwitchChange', val);
  };
  const calcLeftTime = (val, total) => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    if (+total === 24) {
      if (val > h && val < +total) {
        return +val - h;
      }
      return +total - 1 - h + +val;
    } else {
      return +total - 1 - m - +val;
    }
  };

  return (
    <div ref={handleRef} className="cpn--alarm-item">
      <div className="alarm-item">
        <div className="layout-left">
          <div className="alarm-time">{appendZero(data.time.hour)}:{appendZero(data.time.min)}</div>
          <div className="alarm-desc">{data.triggerMode} | {calcLeftTime(data.time.hour, 24)}小时{calcLeftTime(data.time.min, 60)}分钟后响铃</div>
        </div>
        {
          usingSwitch ? <Switch onChange={onSwitchChange} /> : (
            <div className="layout-right">
              <span>
                <svg t="1678724852256" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4899" width="22" height="22"><path d="M393.316 753.587c-4.553-4.553-7.408-11.402-7.408-18.229 0-3.415 0.56-6.831 1.698-10.264 1.157-2.835 3.433-5.692 5.71-7.966l184.402-202.845-184.402-203.404c-2.277-2.277-4.553-5.131-5.71-7.988-1.138-2.836-1.698-6.269-1.698-9.684 0-7.408 2.855-13.676 7.408-18.23v0c4.552-4.553 10.803-7.966 18.211-7.966 3.412 0 6.829 1.138 9.663 2.277 3.415 1.137 6.271 2.836 8.548 5.691v0l200.913 221.073c2.277 2.277 3.985 5.133 5.692 7.966 1.138 3.433 1.707 6.849 1.707 10.263 0 3.432-0.569 6.831-1.707 9.685-1.708 3.433-3.415 5.709-5.692 8.565l-200.914 221.056c-2.277 2.295-5.131 3.993-8.548 5.692-2.835 1.157-6.25 1.718-9.663 1.717v0c-7.408-0.001-13.658-2.837-18.209-7.409v0z" fill="#707070" p-id="4900" /></svg>
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
}
