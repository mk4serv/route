import React from 'react'
import style from './MainLayOut.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayOut() {
  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}
