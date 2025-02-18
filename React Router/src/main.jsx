import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Componets/Home.jsx'
import About from './Componets/About.jsx'
import Contact from './Componets/Contact.jsx'
import Github,{githubInfoLoader} from './Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const routerr=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route loader={githubInfoLoader} path="/github" element={<Github/>}/>
      
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routerr}/>
  </StrictMode>,
)
