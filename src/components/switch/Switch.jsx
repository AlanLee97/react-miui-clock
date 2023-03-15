import { useState } from "react";
import './style.scss';


export default function Switch(props = {}) {
  const { onChange = () => {} } = props;
  const [on, setOn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setOn(!on)
    setClicked(true)
    onChange(on)
  }
  return (
    <div className="cpn--switch" onClick={onClick}>
      <div className={["switch-bg", on ? '' : 'switch-off'].join(' ').trim()}>
        <div className={["switch-slide-block", on ? 'slide-on' : `${clicked ? 'slide-off' : ''}`].join(' ').trim()}></div>
      </div>
    </div>
  )
}
