import { useEffect } from 'react';
import { useState } from 'react';
import { appendZero } from '../../utils';
import './style.scss'

export default function CountDown(props = {}) {
  const [ hour, setHour ] = useState(props.hour || 0);
  const [ min, setMin ] = useState(props.min || 0);
  const [ sec, setSec ] = useState(props.sec || 0);
  const [ timer, setTimer ] = useState(null);

  console.log('props', props);

  const destroy = () => {
    clearInterval(timer);
  }

  useEffect(() => {
    if(props.opt === 'pause') {
      stop()
    }
    if(props.opt === 'start') {
      // start()
    }
    if(props.opt === 'reset') {
      reset()
    }
  })

  useEffect(() => {
    start();
    return destroy;
  }, [sec])

  const start = () => {
    if(timer) clearInterval(timer);
    console.log('start');
    if(Number(hour) === 0 && Number(min) === 0 && Number(sec) === 0) {
      clearInterval(timer);
      return;
    }
    setTimer(setInterval(() => {
      console.log('timer', timer, 'timer=>', hour, min, sec);
      if(min > 0) {
        if(sec > 0) {
          setSec(sec - 1);
        }
      } else if(min === 0 && sec > 0) {
        setSec(sec - 1);
      }

      if(hour > 0 && min === 0 && sec === 0) {
        setHour(hour - 1);
        setMin(59);
        setSec(59);
      } else if(min > 0 && sec === 0) {
        setMin(min - 1);
        setSec(59);
      }
      console.log(hour, min, sec);
    }, 1000));

  }

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    stop();
    setHour(0);
    setMin(0);
    setSec(0);
  }

  return (
    <div className="cpn--count-down">
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      <div className='clock-outline'>
        <div className='clock-inner'>{appendZero(hour)}:{appendZero(min)}:{appendZero(sec)}</div>
      </div>
    </div>
  )
}
