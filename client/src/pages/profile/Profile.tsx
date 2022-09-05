import React from 'react'
//import { Outlet } from 'react-router-dom'
//import FormFormik from '../../components/formFormik'
import Footer from '../../components/footer'
import Nav from '../../components/nav'
import LineChart from '../../components/chartjs/LineChart'

const Profile = () => {
  return (
    <div>
        <Nav/>
        <LineChart/>
        <Footer/>
    </div>
  )
}

export default Profile