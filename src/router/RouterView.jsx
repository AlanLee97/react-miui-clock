import { Routes, Route } from 'react-router-dom';

export default function RouterView(props = {}) {
  const { routes = [] } = props;
  return (
    <Routes>
      {routes.map((route) => {
        return <Route key={`route_${route.path}`} path={route.path} element={<route.component />} />;
      })}
    </Routes>
  );
}
