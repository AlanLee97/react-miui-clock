import { useEffect, useState } from 'react';
import { appendZero } from '../../utils';
import './style.scss';

export default function ClockItem(props = {}) {

  const { data = {} } = props;

  const date = new Date();
  const [currentSec, setCurrentSec] = useState(date.getSeconds());
  const [currentMin, setCurrentMin] = useState(date.getMinutes());
  const [currentHour, setCurrentHour] = useState(date.getHours());
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if(timer) clearInterval(timer);
    let itvTimer = setInterval(() => {
      setCurrentSec(new Date().getSeconds());
      if(+currentSec === 0) {
        setCurrentMin(new Date().getMinutes())
      }
      if(+currentMin === 0) {
        setCurrentHour(new Date().getHours())
      }
    }, 1000)
    setTimer(itvTimer);
    return function destroy() {
      clearInterval(timer);
    }
  }, [currentSec])

  const getLocalDateInfo = () => {
    let date = new Date();
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    }
  }

  return (
    <div className="cpn--clock-item">
      <div className='layout-left'>
        <div className='row-wrapper time-location-wrapper'>
          <div className='time'>{`${appendZero(currentHour)}:${appendZero(currentMin)}`}</div>
          <div className='location'>{data.location}</div>
        </div>
        <div className='row-wrapper'>
          <div className='date-and-gap'>{`${getLocalDateInfo().month}月${getLocalDateInfo().day}日 | ${data.timegap < 0 ? '慢' : '快'}${Math.abs(data.timegap)}小时`}</div>
        </div>
      </div>
      <div className='layout-right'>
      <svg t="1679124957847" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5589" width="36" height="36"><path d="M512 0C229.257143 0 0 229.257143 0 512s229.257143 512 512 512 512-229.257143 512-512S794.742857 0 512 0z m0 937.142857c-234.742857 0-425.142857-190.4-425.142857-425.142857s190.4-425.142857 425.142857-425.142857 425.142857 190.4 425.142857 425.142857-190.4 425.142857-425.142857 425.142857z" p-id="5590" fill="#bfbfbf"></path><path d="M711.657143 656.685714L548.685714 538.857143V256c0-5.028571-4.114286-9.142857-9.142857-9.142857H484.571429c-5.028571 0-9.142857 4.114286-9.142858 9.142857v314.742857c0 2.971429 1.371429 5.714286 3.771429 7.428572l189.028571 137.828571c4.114286 2.971429 9.828571 2.057143 12.8-1.942857l32.685715-44.571429c2.971429-4.228571 2.057143-9.942857-2.057143-12.8z" p-id="5591" fill="#bfbfbf"></path></svg>
      </div>
    </div>
  )
} 