import { useEffect, useState } from 'react';
import './style.scss';

export default function NumberSlideSelector(props = {}) {
  const {start = 0, end = 23, width = 100, unit = ''} = props;
  const [list, setList] = useState([]);
  const [reachEnd, setReachEnd] = useState(true);
  const [curIndex, setCurIndex] = useState(0);

  const genarateList = () => {
    for(let i = start; i <= end; i++) {
      list.push(i < 10 ? `0${i}` : `${i}`);
    }
  }

  const onScroll = (e) => {
    let curIndex = Math.ceil((e.target.scrollTop / 60) + 2)
    // console.log('onScroll', curIndex);
    setCurIndex(curIndex);
    setReachEnd(e.target.scrollTop + 300 === e.target.scrollHeight)
  }

  useEffect(() => {
    console.log('useEffect-1');
    // console.log(list);
  })

  useEffect(() => {
    list.unshift(String(end - 0));
    list.unshift(String(end - 1));
    setList(list);
    console.log('useEffect-2');
    setCurIndex(2)
  }, [])

  useEffect(() => {
    console.log('useEffect-3');
  }, [list])

  if(reachEnd) {
    genarateList();
  }
  

  return (
    <div className="cpn--number-slide-selector" style={{width: `${width}px`}}>
      <div className='number-slide-wrapper' onScroll={onScroll}>
        {
          list.map((item, i) => (
            <div 
            className={['slide-item', 
            curIndex === i ? 'slide-item-active' : '', 
            (curIndex - 1 === i || curIndex + 1 === i) ? 'slide-item-second' : ''].join(' ').trim()} 
            key={`item_${item}_${i}`}>{item}</div>
          ))
        }
      </div>
      <div className="unit-wrapper">{unit}</div>
      <div className='cover-top'></div>
      <div className='cover-bottom'></div>
    </div>
  )
}
