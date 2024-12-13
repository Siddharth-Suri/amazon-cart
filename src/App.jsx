import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MainCart } from './components/AmazonCart'
import { HomeLandingPage } from './components/Home'
import { TopBar } from './components/Topbar'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <TopBar></TopBar>
          <Routes>
            <Route
              path="/"
              element={<HomeLandingPage></HomeLandingPage>}
            ></Route>
            <Route path="/cart" element={<MainCart></MainCart>}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
export default App
