import { forwardRef, useRef, useState, useMemo } from 'react';
import Swiper from '../swiper/Swiper';
import Tabbar from '../tabbar/Tabbar';
import './style.scss';
import eventbus from '../../utils/eventbus';

export default function Tab(props = {}) {
  const { children, items } = props;
  let tabbarRef = useRef();
  let swiperRef = useRef();
  const TabbarForward = useMemo(() => forwardRef((props, ref) => <Tabbar cpnRef={ref} {...props} />), [])
  const SwiperForward = useMemo(() => forwardRef((props, ref) => <Swiper cpnRef={ref} {...props} />), [])

  const onSwiperChange = (val) => {
    const i = val.activeIndex;
    tabbarRef.current.setCurrentIndex(i);
    eventbus.emit('tab:change', i);
    if(props.onChange) {
      props.onChange(i);
    }
  }

  const onTabbarChange = (i) => {
    swiperRef.current.slideTo(i);
    eventbus.emit('tab:change', i);
    if(props.onChange) {
      props.onChange(i);
    }
  }

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
