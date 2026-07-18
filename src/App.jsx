import React from 'react'
import Navbar from './compoents/Navbar'

import { MdFastfood } from "react-icons/md";
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className=' w-full min-h-screen bg-slate-200'>
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App