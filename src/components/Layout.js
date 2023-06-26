import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <div>
    <Header />
    <main class="py-5 pt-2">
    {children}
    </main>
    <Footer />
    </div>
  )
}

export default Layout
