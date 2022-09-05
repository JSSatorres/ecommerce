import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    Formik,
    Form,
    Field,
  } from 'formik'

import"./formFormik.scss"


  interface MyFormValues {
    name: string
    password: string
    email: string
    rol:string
  }

  const handleSubmitFetch = async(values:MyFormValues):Promise<number>=>{
       
    const requestOption ={
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(values),            
  }
  let response = await fetch("http://localhost:4000/api/users",requestOption)
  //.then(response => response.json()) 
   return response.status;  
}

const FormFormik = () => {
    const initialValues: MyFormValues = { name:"", password: "", email:"", rol:"USER_ROLE"};
    const navigate = useNavigate();
    return (
      <div className="formFormik__wrapper">        
        <Formik
         initialValues={initialValues}
         onSubmit={async (values, actions) => {
          /*  alert(JSON.stringify(values, null, 2)); */ 
          //handleSubmitFetch(values)
          const response =  handleSubmitFetch(values)

          if (await response === 200) {            
            navigate("/")
          } 
         }}
       >
          <Form className="formFormik__wrapper__form" >
            <h2>Register</h2>
            <label className="formFormik__wrapper__form__label" htmlFor="name">User name</label>
            <Field className="formFormik__wrapper__form__field" name="name" placeholder="add your user name" />
            <label className="formFormik__wrapper__form__label" htmlFor="password">Password</label>
            <Field className="formFormik__wrapper__form__field" name="password" placeholder="add a strog password" />
            <label className="formFormik__wrapper__form__label" htmlFor="email">Email</label>
            <Field className="formFormik__wrapper__form__field" name="email" placeholder="Email" />
            <button  className="formFormik__wrapper__form__button"type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
}

export default FormFormik