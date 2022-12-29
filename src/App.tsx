import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
