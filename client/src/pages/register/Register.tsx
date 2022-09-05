import React from 'react'
import Nav from '../../components/nav'
import RegisterForm from '../../components/registerForm'
import  Footer from "../../components/footer"
import Pokemon from '../../components/pokemon/Pokemon'
import AdminController from '../../components/adminController'

const Register = () => {
  return (
    <>
    <Nav/>
    <RegisterForm/>
    <AdminController/>
    <Footer/>
</>
  )
}

export default Register