import Layout from '../components/layout/Layout';
import AddAlarmPage from '../pages/AddAlarmPage';
import SelectCityPage from '../pages/SelectCityPage';
import RestTimeManagePage from '../pages/RestTimeManagePage';

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
  }
];

export default routes;
