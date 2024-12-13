import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MainCart } from './components/AmazonCart'
import { HomeLandingPage } from './components/Home'
import { TopBar } from './components/Topbar'

function App() {

  return (
    <div>
      <BrowserRouter>
          
          <TopBar></TopBar>
        <Routes>
          <Route path='/' element={<HomeLandingPage></HomeLandingPage>}></Route>
          <Route path="/cart" element={<MainCart></MainCart>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
