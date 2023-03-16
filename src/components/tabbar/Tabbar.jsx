import { useImperativeHandle, useState } from 'react';
import './style.scss';

export default function Tabbar(props = {}) {
  const { onChange = () => {}, cpnRef } = props;
  const tabbarText = ['闹钟', '时钟', '秒表', '计时'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClick = (i) => {
    setCurrentIndex(i);
    onChange(i);
  }
  useImperativeHandle(cpnRef, () => ({
    setCurrentIndex
  }))
  return (
    <div className="cpn--tabbar" ref={cpnRef}>
      {
        tabbarText.map((item, i) => (
          <div key={`${i}_${item}`} className={['tabbar-item', i === currentIndex ? 'tabbar-item-active' : ''].join(' ')} 
            onClick={() => onClick(i)}>
              { item }
          </div>
        ))
      }
    </div>
  )
} 