import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Switch,
  NumberSlideSelector,
} from '../index';
import AlarmPageContext from '../../contexts/alarmPageContext';
import './style.scss';
import { appendZero, calcLeftTime } from '../../utils';

export default function TimeSettingPanel(props = {}) {
  const { onComplete = () => {} } = props;
  const pageContext = useContext(AlarmPageContext);
  const [h, setH] = useState(pageContext.curAlarmItem?.hour || 0);
  const [m, setM] = useState(pageContext.curAlarmItem?.min || 0);

  useEffect(() => {
    console.log('pageContext', pageContext);
  }, [pageContext]);
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const navigate = useNavigate();
  const onMoreSettingClick = () => {
    onCompleteBtn();
    navigate('/add-alarm', {
      state: {
        mode: 'edit',
      },
    });
  };

  const onCompleteBtn = () => {
    onComplete(pageContext.curAlarmItem, {
      hour: h,
      min: m
    });
  };

  const onSelectedHour = (val) => {
    console.log('onSelectedHour val', val);
    setH(+val);
  };

  const onSelectedMin = (val) => {
    console.log('onSelectedMin val', val);
    setM(+val);
  };

  return (
    <section className="cpn--time-setting-panel">
      <div className="panel-content" onClick={stopPropagation}>
        <div className="panel-header">
          <div className="time-info">
            {
              pageContext.curAlarmItem && (
                <div className="time">{appendZero(pageContext.curAlarmItem.time.hour)}:{appendZero(pageContext.curAlarmItem.time.min)}</div>
              )
            }
            <div className="time-desc">
              {
                pageContext.curAlarmItem && (
                  <span>{pageContext.curAlarmItem.triggerMode}</span>
                )
              }
              <span className="split">|</span>
              {
                pageContext.curAlarmItem && (
                  <span>
                    {calcLeftTime(pageContext.curAlarmItem.time.hour, 24)}小时{calcLeftTime(pageContext.curAlarmItem.time.min, 60)}分钟后响铃
                  </span>
                )
              }
            </div>
          </div>
          <Switch />
        </div>
        <div className="panel-body">
          <NumberSlideSelector unit="时" onSelected={onSelectedHour} />
          <div className="column-split-line" />
          <NumberSlideSelector unit="分" end={59} onSelected={onSelectedMin} />
        </div>
        <div className="panel-footer">
          <button onClick={onMoreSettingClick}>更多设置</button>
          <span className="spacing" />
          <button onClick={onCompleteBtn}>完成</button>
        </div>
      </div>
    </section>
  );
}
