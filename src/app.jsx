import React from 'react'
import { Route, Routes } from 'react-router'
import Data from './maindata/data'
import Signup from './components/signUp/signup'
import Login from './components/login/login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default App
