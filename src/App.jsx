import React from 'react'
import Loader from './components/Loader'
import SiteHeaderHero from './components/SiteHeaderHero'
import MainContent from './components/main-content/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Loader />
    <SiteHeaderHero />
    <MainContent />
    <Footer />
    </>
    )
  }

  export default App