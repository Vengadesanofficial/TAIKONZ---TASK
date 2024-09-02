import './App.css';
import Navbar from './Navbar/Navbar';
import FirstPage from './Firstpage/FirstPage';
import Second from './Secondpage/Second';
import Third from './Thridpage/Third';
import Fourth from './forthpage/Fourth';
import Fifth from './fifthpage/Fifth';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <div className='app-nav'>
        <Navbar />
      </div>
      <div id="firstpage">
        <FirstPage />
      </div>
      <div id="secondpage">
        <Second />
      </div>
      <div id="thirdpage">
        <Third />
      </div>
      <div id="fourthpage">
        <Fourth />
      </div>
      <div id="fifthpage">
        <Fifth />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
