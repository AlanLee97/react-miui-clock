import Layout from '../components/layout/Layout';
import AddAlarmPage from '../pages/AddAlarmPage';
import SelectCityPage from '../pages/SelectCityPage';

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
  }
];

export default routes;
