import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import { AboutCompany } from './Components/AboutCompany'
import ServicesSection from './Components/ServicesSection'
import BankingPartnersSection from './Components/BankingPartnersSection'
import Footer from './Components/Footer'

const App = () => {
  return (
   <>
   <NavBar/>
   <Header/>
   <AboutCompany/>
   <ServicesSection/>
   <BankingPartnersSection/>
   <Footer/>
   </>
  )
}

export default App