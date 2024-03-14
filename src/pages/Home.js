import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from '../Components/Nav'
import Services from '../Components/Services'
import Branches from '../Components/Branches'
import Contact from '../Components/Contact'
import About from '../Components/About.'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav/>}>
           
                
            <Route path="services" element={<Services/>} />
            <Route path="branches" element={<Branches/>}/>
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>}/>
            </Route>
       
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home



