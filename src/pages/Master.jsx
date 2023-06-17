import React, { Fragment } from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
export const Master = () => {
  return (
    < Fragment>
      <Header />
      <Outlet />
      <Footer />
    </ Fragment>
  )
}
