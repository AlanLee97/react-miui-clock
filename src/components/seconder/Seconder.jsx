import { useEffect, useImperativeHandle, useState } from 'react';
import { appendZero } from '../../utils';
import './style.scss';

const STATUS_STARTED = 'started';
const STATUS_PAUSED = 'paused';
const STATUS_UNSTARTED = 'unstarted';

export default function Seconder(props = {}) {
  const { cpnRef } = props;
  const [currentMs, setCurrentMs] = useState(0);
  const [currentSec, setCurrentSec] = useState(0);
  const [currentMin, setCurrentMin] = useState(0);
  const [timer, setTimer] = useState(null);
  const [timerMs, setTimerMs] = useState(null);
  const [status, setStatus] = useState(STATUS_UNSTARTED);

  useEffect(() => {
    if([STATUS_PAUSED, STATUS_STARTED].includes(status)) {
      startSec();
    }

    return function destroy() {
      clearInterval(timer);
      clearInterval(timerMs);
    }
  }, [currentSec])

  useEffect(() => {
    if([STATUS_PAUSED, STATUS_STARTED].includes(status)) {
      startMs();
    }
    return function destroy() {
      clearInterval(timer);
      clearInterval(timerMs);
    }
  }, [currentMs])

  const startSec = () => {
    setStatus(STATUS_STARTED);
    if(timer) clearInterval(timer);
    let itvTimer = setInterval(() => {
      if(itvTimer) clear(itvTimer);
      setCurrentSec(currentSec + 1);
      if(+currentSec === 59) {
        setCurrentMin(currentMin + 1);
        setCurrentSec(0);
      }
    }, 1000)
    setTimer(itvTimer);
  }

  const startMs = () => {
    setStatus(STATUS_STARTED);
    let tmMS = setInterval(() => {
      if(tmMS) {
        clearInterval(tmMS);
      }
      if(timerMs) {
        clearInterval(timerMs);
      }
      setCurrentMs(currentMs + 1);
      if(currentMs >= 99) {
        setCurrentSec(currentSec + 1);
        setCurrentMs(0);
      }
      if(currentSec > 59) {
        setCurrentMin(currentMin + 1);
        setCurrentSec(0);
      }
    }, 1000 / 99)
    setTimerMs(tmMS);
  }

  const pause = () => {
    if(status === STATUS_PAUSED) return;

    setStatus(STATUS_PAUSED);
    clearInterval(timer);
    clearInterval(timerMs);
  }

  const clear = () => {
    if(status === STATUS_UNSTARTED) return;
    pause();
    setCurrentMs(0);
    setCurrentSec(0);
    setCurrentMin(0);

    setStatus(STATUS_UNSTARTED);
  }

  const start = () => {
    if(status === STATUS_STARTED) return;
    startSec();
    startMs();
    setStatus(STATUS_STARTED);
  }

  useImperativeHandle(cpnRef, () => ({
    start,
    pause,
    clear,
    status
  }))

  

  return (
    <div className="cpn--seconder" ref={cpnRef}>
      <div className='primary-time'>
        {`${appendZero(currentMin)}:${appendZero(currentSec)}.${appendZero(currentMs)}`}
      </div>

      {/* <div>
        <button onClick={start}>开始</button>
        <button onClick={pause}>暂停</button>
        <button onClick={clear}>清空</button>
      </div>
      <div>{status}</div> */}
    </div>
  )
} 