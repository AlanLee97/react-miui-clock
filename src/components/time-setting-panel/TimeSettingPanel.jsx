import './style.scss';
import {useNavigate} from 'react-router-dom';
import Switch from '../switch/Switch';
import NumberSlideSelector from '../number-slide-selector/NumberSlideSelector';

export default function TimeSettingPanel(props = {}) {
  const {onComplete = () => {}} = props;
  const stopPropagation = (e) => {
    e.stopPropagation();
  }
  const navigate = useNavigate();
  const onMoreSettingClick = () => {
    onComplete();
    navigate('/add-alarm', {
      state: {
        mode: 'edit'
      }
    });
  }
  return (
    <section className='cpn--time-setting-panel'>
      <div className='panel-content' onClick={stopPropagation}>
        <div className='panel-header'>
          <div className='time-info'>
            <div className='time'>07:00</div>
            <div className='time-desc'>每天<span className='split'>|</span>9小时28分钟后响铃</div>
          </div>
          <Switch />
        </div>
        <div className='panel-body'>
          <NumberSlideSelector unit={'时'} />
          <div className='column-split-line'></div>
          <NumberSlideSelector unit={'分'} end={59} />
        </div>
        <div className='panel-footer'>
          <button onClick={onMoreSettingClick}>更多设置</button>
          <span className='spacing'></span>
          <button onClick={onComplete}>完成</button>
        </div>
      </div>
    </section>
  )
}