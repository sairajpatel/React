import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Componets/Header/Header'
import { Outlet } from 'react-router'
import Footer from  './Componets/Footer/Footer'




function App(){
  return(
 <>
 <Header/>
 <Outlet/>
 <Footer/>
 </>
  )
}

export default App
