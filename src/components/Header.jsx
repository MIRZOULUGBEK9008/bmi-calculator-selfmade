import React from 'react'
import SiteLogo from '../img/site-logo-min.svg'

function Header() {
  return (
    <header className='site-header'>
    <div className="site-header__container container">
    <a className="site-header__logo logo" href="index.html">
    <img className="logo__img" src={SiteLogo} alt="BMI logo" />
    </a>
    </div>
    </header>
    )
  }

  export default Header