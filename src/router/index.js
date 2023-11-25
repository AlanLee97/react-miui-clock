import React, { lazy } from 'react';

import Layout from '../components/layout/Layout';
// import AddAlarmPage from '../pages/AddAlarmPage';
// import SelectCityPage from '../pages/SelectCityPage';
// import RestTimeManagePage from '../pages/RestTimeManagePage';
// import LifeEarlyReportPage from '../pages/LifeEarlyReportPage';
// import SettingPage from '../pages/SettingPage';

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/select-city',
    component: lazy(() => import('../pages/SelectCityPage'))
  },
  {
    path: '/add-alarm',
    component: lazy(() => import('../pages/AddAlarmPage'))
  },
  {
    path: '/rest-time-manage',
    component: lazy(() => import('../pages/RestTimeManagePage'))
  },
  {
    path: '/life-early-report',
    component: lazy(() => import('../pages/LifeEarlyReportPage'))
  },
  {
    path: '/setting',
    component: lazy(() => import('../pages/SettingPage'))
  }
];

export default routes;
