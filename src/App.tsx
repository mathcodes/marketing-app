import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import About from './pages/About';
import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;