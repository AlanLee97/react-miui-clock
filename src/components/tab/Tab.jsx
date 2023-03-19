import { forwardRef, useRef } from 'react';
import Swiper from '../swiper/Swiper';
import Tabbar from '../tabbar/Tabbar';
import './style.scss';
import eventbus from '../../utils/eventbus';

export default function Tab(props = {}) {
  const { children } = props;
  let tabbarRef = useRef();
  let swiperRef = useRef();
  const TabbarForward = forwardRef((props, ref) => <Tabbar cpnRef={ref} {...props} />)
  const SwiperForward = forwardRef((props, ref) => <Swiper cpnRef={ref} {...props} />)

  const onSwiperChange = (i) => {
    tabbarRef.current.setCurrentIndex(i);
    eventbus.emit('tab:change', i);
  }

  const onTabbarChange = (i) => {
    swiperRef.current.setCurrentIndex(i);
    eventbus.emit('tab:change', i);
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
