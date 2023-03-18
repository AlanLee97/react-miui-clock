import { useEffect, useState } from 'react';
import { appendZero } from '../../utils';
import './style.scss';

export default function DisplayTime(props = {}) {
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

  const getLocalTime = () => {
    let date = new Date();
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  return (
    <div className="cpn--display-time">
      <div className='primary-time'>
        {`${appendZero(currentHour)}:${appendZero(currentMin)}:${appendZero(currentSec)}`}
      </div>
      <div className='local-date'>本地时间：{getLocalTime()}</div>
    </div>
  )
} 