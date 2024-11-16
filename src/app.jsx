import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/signUp/signup'
import Login from './components/login/login'
import ForgotPassword from './components/forgotpass/forgotpassword'
import Main from './components/MyPortfolio/main'
import Projects from './components/portfoliogallery/explore portfolio/projects'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/DevSphere" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  )
}
