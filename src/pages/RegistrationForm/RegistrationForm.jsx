import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, ErrorMessage, validateYupSchema, Field } from "formik"
import * as Yup from 'yup'
import styled from "styled-components"
import { Wrapper, InputWrapper, RegForm, Fieldset, CheckboxLabel, Checkbox, SubmitBtn } from './RegistrationForm.styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_HOST } from '../../config/constants';


function RegistrationFormik(){
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
 
  const initialValues = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    password: '',
    confirmPassword: '',
    acceptTerms: false
  }

  const MySchema = Yup.object({
    username: Yup.string().min(5, 'Username too short.').max(16, 'Username too long').required('Username cannot be empty.'),
    email: Yup.string().email('Invalid email.').required('Email is required.'),
    password: Yup.string().required('Create a strong and valid password.'),
    confirmPassword: Yup.string().required('Password confirmation did not match.'),
    acceptTerms: Yup.boolean().oneOf([true], 'You MUST accept the Terms to proceed.')
})

async function submitFn(values, { resetForm, setSubmitting }){
  setSubmitting(true)
  delete values.acceptTerms

  try {
    const result = await axios.post(`${BACKEND_HOST}/api/auth/register`, values)
    setError(null)
    setMessage(result?.data?.message)
    resetForm()
    console.log(result)
  }
  catch(axiosError){
    setMessage(null)
    setError(`Registration Failed. Reason: ${axiosError?.response?.data?.error}`)
  }
  finally {
    setSubmitting(false)
  }

}

  const MyLabel = {
    defaultColor :'lightblue', 
    hoverColor : 'rgb(0 50 200)',
    checkedColor : 'lightgreen'
  }

    return(
    <Formik initialValues={initialValues} validationSchema={MySchema} onSubmit={submitFn}> 
      {(formik)=>(
        <RegForm id="regForm" action="#" method="get">
        <h1>° Registration Form °</h1><br />
        {error && <h3 className='text-red-400'>{error}</h3>}
        {message && <h3 className='text-green-600'>{message}</h3>}
        {/* UserName */}
        <InputWrapper
               type="text"
               name="username"
               placeholder="Enter you username..."
        />
        <ErrorMessage name="username"/>
        {/* FirstName */}
        <InputWrapper
               type="text"
               name="firstName"
               placeholder="Enter your firstname..."
        />
        <ErrorMessage name="firstName"/>
        {/* LastName */}
        <InputWrapper
               type="text"
               name="lastName"
               placeholder="Enter your lastname..."
        />
        <ErrorMessage name="lastName"/>
        {/* Date Of Birth */}
        <InputWrapper
                type="date"
                name="dateOfBirth"
        />
        <ErrorMessage name="dateOfBirth"/>

        {/* Email */}
        <InputWrapper 
          name="email" 
          type="email" 
          placeholder="Enter your email..." 
        />
      <ErrorMessage name="email"/>
        {/* Password */}
        <InputWrapper
          type="password"
          name="password"
          minLength={5}
          maxLength={30}
          placeholder="Enter your password..."
          required=""
        />
      <ErrorMessage name="password"/>
        {/* Confirm Password */}
        <InputWrapper
          type="password"
          name="confirmPassword"
          minLength={5}
          maxLength={10}
          placeholder="Confirm your password..."
          required=""
        />
        <ErrorMessage name="confirmPassword"/>

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
    
        <SubmitBtn type="submit" disabled={formik.isSubmitting}>Create Account</SubmitBtn>
    
        <br />
    
        <h4>Already have an account?</h4>
        <Link to='/login' style={{
          color: 'white',
          margin: '2px 2px',
          padding: '.2em .8em',
          boxShadow: '2px 2px 7px rgba(0 0 0 /.5)',
          border: '1px solid #ddd',
          borderRadius: '7px'
          }} >Login</Link>
      </RegForm>

      )}
  
  </ Formik>

    )
}

export default RegistrationFormik;