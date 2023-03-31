
import './App.css';
import HeaderNav from './components/Header-nav';
import LeftNav from './components/LeftNav';
import MainDiv from './MainDiv';

function App() {

  return (
    <div className="App">
    
      <HeaderNav ></HeaderNav>
      <div className='Flex'>
      <LeftNav></LeftNav>
        <MainDiv></MainDiv>
        </div>
       
  
    </div>
  );
}

export default App;
