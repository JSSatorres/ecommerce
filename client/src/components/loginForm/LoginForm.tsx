import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
//import { decrement, increment, incrementByAmount } from '../../store/slices/counter'
import {
  Formik,
  Form,
  Field,
} from 'formik'
import"./loginForm.scss" 

interface MyFormValues {
  email: string
  password: string
}

const LoginForm = () => {
  const count = useAppSelector(state=>state.counter.value)
  const dispatch = useAppDispatch()
  const initialValues: MyFormValues = { password: "", email:"", };

  return (
    <div className="loginForm__wrapper">
        
    <Formik
     initialValues={initialValues}
     onSubmit={(values, actions) => {
       console.log({ values, actions });
        alert(JSON.stringify(values, null, 2)); 
      /*  handleSubmitFetch(values) */
       actions.setSubmitting(false);
     }}
   >
      <Form className="loginForm__wrapper__form" >
        <h2>Login</h2>
        <label className="loginForm__wrapper__form__label" htmlFor="email">Email</label>
        <Field className="loginForm__wrapper__form__field" name="email" placeholder="Email" />
        <label className="loginForm__wrapper__form__label" htmlFor="password">Password</label>
        <Field className="loginForm__wrapper__form__field" name="password" placeholder="add a strog password" />
        <button  className="loginForm__wrapper__form__button"type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
 
  )
}

export default LoginForm



