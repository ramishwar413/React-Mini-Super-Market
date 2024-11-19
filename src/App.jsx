import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import ContactUs from './Pages/Contact Us';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/menu" element ={<Menu />} />
      <Route path="/about" element ={<About />} />
      <Route path="/contact" element ={<ContactUs />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
