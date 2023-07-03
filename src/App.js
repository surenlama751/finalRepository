import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './pages/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Home/>
     <About/>
     <Contact/>
     <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
