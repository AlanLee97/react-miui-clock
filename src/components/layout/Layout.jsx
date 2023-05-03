import './style.scss';
import Menubar from '../menubar/Menubar';
import Tab from '../tab/Tab';
import AddBtn from '../add-btn/AddBtn';
import AlarmPage from '../../pages/AlarmPage';
import ClockPage from '../../pages/ClockPage';
import StopWatchPage from '../../pages/StopWatchPage';
import TimerPage from '../../pages/TimerPage';
import { useState, useEffect } from 'react';
import eventbus from '../../utils/eventbus';
import { useLocation, useMatches, useNavigation, useRoutes } from 'react-router-dom';


export default function Layout(props = {}) {
  const [curTab, setCurTab] = useState(0);

  const onTabChange = (tab) => {
    console.log('onTabChange', tab);
    setCurTab(tab);
    
  }

  useEffect(() => {
    console.log('curTab', curTab);
  }, [curTab])

  // const navigation = useNavigation();
  const location = useLocation()
  console.log('location', location);

  return (
    <div className="cpn--layout">
      <div className='menubar-wrapper'>
        <Menubar />
      </div>
      <div className='tab-wrapper'>
        <Tab onChange={onTabChange}>
          <AlarmPage />
          <ClockPage />
          <StopWatchPage />
          <TimerPage />
        </Tab>
      </div>
      {
        location.pathname === '/' && (
          <>
            <AddBtn type={0} hide={0 !== curTab} />
            <AddBtn type={1} hide={1 !== curTab} />
            <AddBtn type={2} hide={2 !== curTab} />
            <AddBtn type={3} hide={3 !== curTab} />
          </>
        )
      }

    </div>
  )
}
