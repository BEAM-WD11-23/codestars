import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, ErrorMessage, validateYupSchema, Field } from "formik"
import * as Yup from 'yup'
import styled from "styled-components"
import { Wrapper, InputWrapper, RegForm, Fieldset, CheckboxLabel, Checkbox, SubmitBtn } from './RegistrationForm.styled';


function RegistrationFormik(){
 
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    acceptTerms: false
  }

  const MySchema = Yup.object({
    username: Yup.string().min(5, 'Username too short.').max(16, 'Username too long').required('Username cannot be empty.'),
    email: Yup.string().email('Invalid email.').required('Email is required.'),
    password: Yup.string().required('Create a strong and valid password.'),
    confirmPassword: Yup.string().required('Password confirmation did not match.'),
    telephone: Yup.string().matches(/^(00|\+)[\d]{7,12}$/, 'This is not a valid phone number.'),
    acceptTerms: Yup.boolean().oneOf([true], 'You MUST accept the Terms to proceed.')
})

function submitFn(values){

  console.log(values);

}

  const MyLabel = {
    defaultColor :'lightblue', 
    hoverColor : 'rgb(0 50 200)',
    checkedColor : 'lightgreen'
  }

    return(
    <Formik initialValues={initialValues} validationSchema={MySchema} onSubmit={submitFn}> 
      {()=>(
        <RegForm id="regForm" action="#" method="get">
        <h1>° Registration Form °</h1><br />
        <InputWrapper
               type="text"
               name="username"
               placeholder="Enter you username..."

        / >
      <ErrorMessage name="username"/>
    
        <InputWrapper 
          name="email" 
          type="email" 
          placeholder="Enter your email..." 
        />
      <ErrorMessage name="email"/>

        <InputWrapper
          type="password"
          name="password"
          minLength={5}
          maxLength={30}
          placeholder="Enter your password..."
          required=""
        />
      <ErrorMessage name="password"/>

        <InputWrapper
          type="password"
          name="confirmPassword"
          minLength={5}
          maxLength={10}
          placeholder="Confirm your password..."
          required=""
        />
      <ErrorMessage name="confirmPassword"/>

        <InputWrapper
          type="tel"
          name="telephone"
          placeholder="Enter your phone number..."
          pattern="(00|\+)[\d]{7,12}"
        />
      <ErrorMessage name="telephone"/>

        <Fieldset>
       
        <CheckboxLabel
          whileHover={{backgroundColor:MyLabel.hoverColor}}
            htmlFor="acceptTerms"
          >
          <Field as={Checkbox}
            type="checkbox"
            placeholder="I accept terms & Conditions"
            name="acceptTerms"
            id="acceptTerms"
          />
    
            I accept terms &amp; Conditions
        </CheckboxLabel>
        <ErrorMessage name="acceptTerms"/>
    
        </Fieldset>
    
        <SubmitBtn
            type="submit">Create Account</SubmitBtn>
    
        <br />
    
        <h4>Already have an account?</h4> <a href="#" style={{
          color: 'white',
          margin: '2px 2px',
          padding: '.2em .8em',
          boxShadow: '2px 2px 7px rgba(0 0 0 /.5)',
          border: '1px solid #ddd',
          borderRadius: '7px'
          }} >Login</a>
      </RegForm>

      )}
  
</ Formik>

    )
}

export default RegistrationFormik;