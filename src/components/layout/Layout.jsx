import './style.scss';
import Menubar from '../menubar/Menubar';
import Tab from '../tab/Tab';
import AddBtn from '../add-btn/AddBtn';
import AlarmPage from '../../pages/AlarmPage';
import ClockPage from '../../pages/ClockPage';
import StopWatchPage from '../../pages/StopWatchPage';
import TimerPage from '../../pages/TimerPage';

export default function Layout(props = {}) {
  return (
    <div className="cpn--layout">
      <div className='menubar-wrapper'>
        <Menubar />
      </div>
      <div className='tab-wrapper'>
        <Tab>
          <AlarmPage />
          <ClockPage />
          <StopWatchPage />
          <TimerPage />
        </Tab>
      </div>
      <AddBtn />
    </div>
  )
}
