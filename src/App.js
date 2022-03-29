// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Services from './Services';
import Blogs from './Blogs';
import About from './About';
import {BrowserRouter,Route, Link  , Switch, Routes } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path ='/' element={<Home/>} />
      <Route exact path ='/services' element={<Services/>}  />
      <Route exact path ='/blogs' element={<Blogs/>}  />
      <Route exact path ='/about' element={<About/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
