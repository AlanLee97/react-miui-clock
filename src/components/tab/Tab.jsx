import { forwardRef, useRef, useState, useMemo } from 'react';
import Swiper from '../swiper/Swiper';
import Tabbar from '../tabbar/Tabbar';
import './style.scss';
import eventbus from '../../utils/eventbus';
import { useEffect } from 'react';

export default function Tab(props = {}) {
  const { children } = props;
  let tabbarRef = useRef();
  let swiperRef = useRef();
  const TabbarForward = useMemo(() => forwardRef((props, ref) => <Tabbar cpnRef={ref} {...props} />), [])
  const SwiperForward = useMemo(() => forwardRef((props, ref) => <Swiper cpnRef={ref} {...props} />), [])
  const [ index, setIndex ] = useState(0);

  const onSwiperChange = (i) => {
    tabbarRef.current.setCurrentIndex(i);
    eventbus.emit('tab:change', i);
    if(props.onChange) {
      props.onChange(i);
    }
    setIndex(i);
  }

  const onTabbarChange = (i) => {
    swiperRef.current.setCurrentIndex(i);
    eventbus.emit('tab:change', i);
    if(props.onChange) {
      props.onChange(i);
    }
  }

  useEffect(() => {
    console.log('index->', index);
  }, [index])

  return (
    <div className="cpn--tab">
      <div className='tab-header'>
        <TabbarForward ref={tabbarRef} onChange={onTabbarChange} />
      </div>
      <div className="tab-body">
        <SwiperForward ref={swiperRef} onChange={onSwiperChange}>
          {children}
        </SwiperForward>
      </div>
    </div>
  )
}
