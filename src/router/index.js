import Layout from '../components/layout/Layout';
import AddAlarmPage from '../pages/AddAlarmPage';
import SelectCityPage from '../pages/SelectCityPage';
import RestTimeManagePage from '../pages/RestTimeManagePage';
import LifeEarlyReportPage from '../pages/LifeEarlyReportPage';

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/select-city',
    component: SelectCityPage
  },
  {
    path: '/add-alarm',
    component: AddAlarmPage
  },
  {
    path: '/rest-time-manage',
    component: RestTimeManagePage
  },
  {
    path: '/life-early-report',
    component: LifeEarlyReportPage
  }
];

export default routes;
