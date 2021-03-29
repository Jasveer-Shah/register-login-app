import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Dashboard() {
  return (
    <>
    <Sidebar/>
    <div className= "Main__container">
      <Navbar/>
      <Header/>
      <Container/>
      <Footer/>
    </div>
    </>
  )
}

export default Dashboard
