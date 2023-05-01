import './App.css';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import AddAlarmPage from './pages/AddAlarmPage';




function App() {

  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/add-alarm" element={<AddAlarmPage />} />
      </Routes>
    </div>
  );
}

export default App;
