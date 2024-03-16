import React from 'react'
import './App.css';
import NevBar from './Components/nevBar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Support from './Components/Support';
import Account from './Components/Account';
import AboutUS from './Components/AboutUs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NevBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/account' element={<Account/>} />
      <Route path='/aboutus' element={<AboutUS />} />
      <Route path='/support' element={<Support />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App