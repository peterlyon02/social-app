import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div classname='app'>
        <Routes>
          <Route  path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
