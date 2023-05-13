import React from 'react'
import SectionBmi from './SectionBmi'
import SectionAdvice from './SectionAdvice'
import SectionLimit from './SectionLimit'

function MainContent() {
  return (
    <main className='main-content'>
    <SectionBmi />
    <SectionAdvice />
    <SectionLimit />
    </main>
    )
  }

  export default MainContent