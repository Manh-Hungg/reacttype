import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'

export default function HomeLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
