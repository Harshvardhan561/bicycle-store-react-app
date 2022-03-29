// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Services from './Services';
import Blogs from './Blogs';
import About from './About';

function App() {
  return (
    <div className='app'>
      <Home/>
      <Services/>
      <Blogs/>
      <About/>
    </div>
  );
}

export default App;
