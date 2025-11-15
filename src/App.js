import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
// import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import About from './components/About';
import OurServices from './components/OurServices';
import Job from './components/Job';
// import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/AboutUs' element={<About />}></Route>
          <Route path='/ContactUs' element={<Contact />}></Route>
          <Route path='/OurServices' element={<OurServices />}></Route>
          <Route path='/Job' element={<Job />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;