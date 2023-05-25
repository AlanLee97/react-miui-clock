import { useEffect, useRef, useState } from 'react';
import './style.scss';

export default function NumberSlideSelector(props = {}) {
  const {
    start = 0, end = 23, width = 100, unit = '', onSelected = () => {},
  } = props;
  const [list, setList] = useState([]);
  const [reachEnd, setReachEnd] = useState(true);
  const [scrollFinsh, setScrollFinsh] = useState(true);
  const [curIndex, setCurIndex] = useState(0);
  const [scrollTimer, setScrollTimer] = useState(null);
  const [tapping, setTapping] = useState(false);
  const [disableOnScroll, setDisableOnScroll] = useState(false);
  const slideWrapperRef = useRef();

  const genarateList = () => {
    for (let i = start; i <= end; i++) {
      list.push(i < 10 ? `0${i}` : `${i}`);
    }
  };

  const onScroll = (e) => {
    if (disableOnScroll) return;
    const curIndex = Math.ceil((e.target.scrollTop / 60) + 2);
    setCurIndex(curIndex);
    setReachEnd(e.target.scrollTop + 300 === e.target.scrollHeight);

    if (scrollTimer) {
      clearTimeout(scrollTimer);
      setScrollFinsh(false);
    }
    setScrollTimer(setTimeout(() => {
      setScrollFinsh(true);
      if (!tapping) {
        setDisableOnScroll(true);
        e.target.scrollTop = curIndex * 60 - 120;
        setTimeout(() => {
          setDisableOnScroll(false);
          onSelected(e.target.querySelectorAll('.slide-item-active')[0].textContent);
        }, 100);
      }
    }, 100));
  };

  const onTouchStart = (e) => {
    setTapping(true);
  };

  const onTouchEnd = (e) => {
    setTapping(false);
    if (disableOnScroll) return;
    const el = slideWrapperRef.current;

    setDisableOnScroll(true);
    el.scrollTop = curIndex * 60 - 120;
    setTimeout(() => {
      setDisableOnScroll(false);
    }, 100);
  };

  useEffect(() => {
    list.unshift(String(end - 0));
    list.unshift(String(end - 1));
    setList(list);
    setCurIndex(2);
    console.log('mounted');
  }, []);

  if (reachEnd) {
    genarateList();
  }

  return (
    <div className="cpn--number-slide-selector" style={{ width: `${width}px` }}>
      <div className="number-slide-wrapper" ref={slideWrapperRef} onScroll={onScroll} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {
          list.map((item, i) => (
            <div
              data-i={i}
              className={['slide-item',
                curIndex === i ? 'slide-item-active' : '',
                (curIndex - 1 === i || curIndex + 1 === i) ? 'slide-item-second' : ''].join(' ').trim()}
              key={`item_${item}_${i}`}
            >
              {item}
            </div>
          ))
        }
      </div>
      <div className="unit-wrapper">{unit}</div>
      <div className="cover-top" />
      <div className="cover-bottom" />
    </div>
  );
}
