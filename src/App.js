import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import { AboutCompany } from './Components/AboutCompany'
import ServicesSection from './Components/ServicesSection'
import BankingPartnersSection from './Components/BankingPartnersSection'
import StatsComponent from './Components/StatsComponent'
import StatsSection from './Components/StatsSection'
import AwardsAchievements from './Components/AwardsAchievements'
import MissionSection from './Components/MissionSection'
import FeedbackContainer from './Components/FeedbackContainer'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'


const App = () => {
  return (
   <>
   <NavBar/>
   <Header/>
   <AboutCompany/>
   <ServicesSection/>
   <BankingPartnersSection/>
   <StatsComponent/>
   <StatsSection/>
   <AwardsAchievements/>
   <MissionSection/>
   <FeedbackContainer/>
   <ContactUs/>
   <Footer/>
   </>
  )
}

export default App