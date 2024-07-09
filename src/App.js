import logo from './logo.svg';
import './App.css';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import Recommends from './components/recommends/Recommends';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FormScreen from './components/form/FormScreen';
import { useEffect, useState } from 'react';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <ThirdScreen/>
  <Recommends/>

  <SecondScreen/>
  <ForthScreen/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
