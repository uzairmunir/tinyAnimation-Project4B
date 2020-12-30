import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import ContactUs from './components/ContactUs'
import NavBar from './components/NavBar'

const RouteConfig = () => {
    return (
        <div>
            <Router>
            <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig
