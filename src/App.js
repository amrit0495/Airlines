import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/Home/home';
import './App.css';

function App() {
  return (
    <div class="App">
      {/* <FormDemo user={imaginaryUser} /> */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
