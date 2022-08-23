import React, { useState } from 'react'

import Header from './Header'
import IconsSidebar from './IconsSidebar'
import Main from './Main'
import Footer from './Footer'

import '../styles/styles.scss'


export default function App() {

  const [windowSize, setWindowSize] = useState('');

  const updateWindowWidth = () => {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener('resize', updateWindowWidth);

  return (
    <>
      <Header />
      {windowSize > 769 && <IconsSidebar />}
      <Main />
      <Footer />
    </>

  )
}
