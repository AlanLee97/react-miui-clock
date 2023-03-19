import './style.scss';
import eventbus from '../../utils/eventbus';
import { useEffect, useState } from 'react';

const STATUS_STARTED = 'started';
const STATUS_PAUSED = 'paused';
const STATUS_UNSTARTED = 'unstarted';

export default function AddBtn(props = {}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [status, setStatus] = useState(STATUS_UNSTARTED);
  useEffect(() => {
    eventbus.on('tab:change', val => {
      setCurrentTabIndex(val);
    });

    return function destroy() {
      eventbus.off('tab:change');
    }
  }, [])

  const onClickStart = () => {
    if(status === STATUS_UNSTARTED || status === STATUS_PAUSED) {
      eventbus.emit('seconder:start');
      setStatus(STATUS_STARTED);
    }
    if(status === STATUS_STARTED) {
      eventbus.emit('seconder:pause');
      setStatus(STATUS_PAUSED);
    }
  }

  const onClickClear = () => {
    eventbus.emit('seconder:clear');
    setStatus(STATUS_UNSTARTED);
  }

  return (
    <div className="cpn--add-btn">
      {
        [0, 1].includes(currentTabIndex) && (
          <div className="icon-wrapper">
            <span>
            <svg t="1678725586122" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6071" width="32" height="32"><path d="M832 448H576V192a64 64 0 0 0-128 0v256H192a64 64 0 0 0 0 128h256v256a64 64 0 1 0 128 0V576h256a64 64 0 1 0 0-128z" p-id="6072" fill="#0c84ff"></path></svg>
            </span>
          </div>
        )
      }
      {
        [2, 3].includes(currentTabIndex) && (
          <div className='icon-row-wrapper'>
            {
              // 矩形icon - 清除
              (status === STATUS_PAUSED && status !== STATUS_UNSTARTED) && (
                <div className="icon-wrapper" onClick={onClickClear}>
                  <span>
                  <svg t="1679241029687" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7181" width="20" height="20"><path d="M192 896a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192z m0-64V192h640v640H192z" fill="#0c84ff" fillOpacity=".85" p-id="7182"></path></svg>
                  </span>
                </div>
              )
            }
            {
              // 棋子icon
              status === STATUS_STARTED && (
                <div className="icon-wrapper">
                  <span>
                  <svg t="1679241720748" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20263" width="20" height="20"><path d="M303.45 49.857a38.832 38.832 0 0 0-25.38-9.397h-38.99a38.988 38.988 0 0 0-38.988 38.989v857.746a38.988 38.988 0 0 0 38.989 38.988h38.988a38.988 38.988 0 0 0 38.989-38.988V511.129H806.05a38.988 38.988 0 0 0 23.237-70.257L303.451 49.818z" fill="#0c84ff" p-id="20264"></path></svg>
                  </span>
                </div>
              )
            }
            <div className="icon-wrapper" onClick={onClickStart}>
              <span>
                {
                  status === STATUS_STARTED ? (
                    // 暂停icon - 点击暂停
                    <svg t="1679239849185" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5293" width="20" height="20"><path d="M804.571429 1024a146.285714 146.285714 0 0 1-146.285715-146.285714V146.285714a146.285714 146.285714 0 0 1 292.571429 0v731.428572a146.285714 146.285714 0 0 1-146.285714 146.285714z m-585.142858 0a146.285714 146.285714 0 0 1-146.285714-146.285714V146.285714a146.285714 146.285714 0 0 1 292.571429 0v731.428572a146.285714 146.285714 0 0 1-146.285715 146.285714z" fill="#0c84ff" p-id="5294"></path></svg>
                  ) : (
                    // 三角形icon - 点击开始
                    <svg t="1679237615222" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3324" width="20" height="20"><path d="M90.624 100.442028C90.624 8.302184 154.098115-26.506202 231.905095 21.611273l642.931359 401.320211c77.80698 49.14125 77.80698 128.995782 0 177.113256L231.905095 1002.388727C154.098115 1050.506202 90.624 1015.697816 90.624 923.557972V100.442028z" p-id="3325" fill="#0c84ff"></path></svg>
                  )
                }
              </span>
            </div>
          </div>
        )
      }
    </div>
  )
}