import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import DefaultHOC from './HOC/Default.HOC';
import HomePage from './Pages/homepage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
  <DefaultHOC path="/" exact component={HomePage} />
    </>

  );
}

export default App;
