import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clients />} />
          <Route path='/clients' element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
