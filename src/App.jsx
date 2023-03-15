import './App.css';
import Tabbar from './components/tabbar/Tabbar';
import Menubar from './components/menubar/Menubar';
import Swiper from './components/swiper/Swiper';
import AlarmPage from './pages/AlarmPage';


function App() {
  const onSwiperChange = (i) => {
    console.log('onSwiperChange', i);
  }
  return (
    <div className="App">
      <Menubar />
      <Tabbar />
      {/* <Swiper onChange={onSwiperChange}/> */}
      <AlarmPage />
    </div>
  );
}

export default App;
