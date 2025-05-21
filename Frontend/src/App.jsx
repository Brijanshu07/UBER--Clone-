import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainSignup from './pages/CaptainSignup'
import { CaptainLogin } from './pages/CaptainLogin'
import { UserDataContext } from './context/UserContext'

const App = () => {
  const ans = useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path= '/' element={<Home/>} />
        <Route path= '/login' element={<UserLogin/>} />
        <Route path= '/signup' element={<UserSignUp/>} />
        <Route path= '/captain-login' element={<CaptainLogin/>} />
        <Route path= '/captain-signup' element={<CaptainSignup/>} />

      </Routes>
    </div>
  )
}

export default App