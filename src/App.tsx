import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DevEyesProvider } from './context/DevEyesContext';
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App(): React.ReactElement {
  return (
    <DevEyesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DevEyesProvider>
  );
}

export default App;
