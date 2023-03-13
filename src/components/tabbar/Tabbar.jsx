import { useState } from 'react';
import './style.scss';

export default function Tabbar() {
  const tabbarText = ['闹钟', '时钟', '秒表', '计时'];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="cpn--tabbar">
      {
        tabbarText.map((item, i) => (
          <div key={`${i}_${item}`} className={['tabbar-item', i === currentIndex ? 'tabbar-item-active' : ''].join(' ')} 
            onClick={() => setCurrentIndex(i)}>
              { item }
          </div>
        ))
      }
    </div>
  )
} 