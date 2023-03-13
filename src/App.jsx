import './App.css';
import Tabbar from './components/tabbar/Tabbar';
import Menubar from './components/menubar/Menubar';
import AlarmPage from './pages/AlarmPage';


function App() {
  return (
    <div className="App">
      <Menubar />
      <Tabbar />
      <AlarmPage />
    </div>
  );
}

export default App;
