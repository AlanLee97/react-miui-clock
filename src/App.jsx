import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from './store/countReducer';
import Layout from './components/layout/Layout';
import AddAlarmPage from './pages/AddAlarmPage';
import SelectCityPage from './pages/SelectCityPage';

function AddCpn() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => {
      dispatch(add());
    }}
    >
      增加
    </button>
  );
}

function SubCpn() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => {
      dispatch(sub());
    }}
    >
      减少
    </button>
  );
}

function App() {
  useEffect(() => {

  }, []);

  // const countValue = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      {/* <h1>{countValue}</h1>
      <AddCpn />
      <SubCpn /> */}
      <Layout />
      <Routes>
        <Route path="/add-alarm" element={<AddAlarmPage />} />
        <Route path="/select-city" element={<SelectCityPage />} />
      </Routes>
    </div>
  );
}

export default App;
