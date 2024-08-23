
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeComp from './components/pages/HomeComp'
import AboutComp from './components/pages/AboutComp'
import ContactComp from './components/pages/ContactComp'
import HeaderComp from './components/header/HeaderComp'
import FooterComp from './components/footer/FooterComp'
import LoginSignupComp from './components/loginSignup/LoginSignupComp'

function App() {


  return (
    <>
    <BrowserRouter>
    <HeaderComp/>
    <Routes>
      <Route  path='/' element={<HomeComp/>}  />
      <Route  path='/about' element={<AboutComp />}  />
      <Route  path='/contact' element={<ContactComp/>}  />
      <Route  path='/account' element={<LoginSignupComp/>}  />
    </Routes>
    <FooterComp/>
    </BrowserRouter>
    </>
  )
}

export default App
