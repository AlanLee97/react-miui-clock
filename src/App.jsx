import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddAlarmPage from './pages/AddAlarmPage';
import SelectCityPage from './pages/SelectCityPage';

function App() {
  useEffect(() => {

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
