import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/layout/Layout';
import AddAlarmPage from './pages/AddAlarmPage';
import SelectCityPage from './pages/SelectCityPage';
import './App.css';

function App() {
  const appStore = useSelector((state) => state.app);
  useEffect(() => {
    console.log('appStore', appStore);
  }, []);
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/add-alarm" element={<AddAlarmPage />} />
        <Route path="/select-city" element={<SelectCityPage />} />
      </Routes>
    </div>
  );
}

export default App;
