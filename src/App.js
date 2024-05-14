import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <>
    
    <Routes >
      <Route path='/' element={<Homepage />}/>
     </Routes>
    </>
  )
}

export default App