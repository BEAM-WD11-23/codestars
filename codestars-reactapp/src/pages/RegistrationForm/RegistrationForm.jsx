import { useState } from 'react';
import { motion } from 'framer-motion';
import './RegistrationForm.style.css';
import { Wrapper, InputWrapper, Form, Fieldset, SubmitBtn, CheckboxLabel, Checkbox } from './RegistrationForm.styled';
function RegistrationForm(){
 
  const [isChecked, setIsChecked] = useState(false)

  const MyLabel = {
    defaultColor :'lightblue', 
    hoverColor : 'rgb(0 50 200)',
    checkedColor : 'lightgreen'
  }

    return(
    <Wrapper> 
            <Form id="regForm" action="#" method="get">
    <h1>° Registration Form °</h1><br />
    <InputWrapper
           type="text"
           name="username"
           pattern="[A-Za-z0-9.]+"
           minLength={6}
           maxLength={12}
           placeholder="Enter you username..."
           required=""
    / >
   

    <InputWrapper type="email" placeholder="Enter your email..." />
    <InputWrapper
      type="password"
     name="password"
       minLength={5}
      maxLength={30}
      placeholder="Enter your password..."
      required=""
    />
    <InputWrapper
      type="password"
     name="password"
       minLength={5}
      maxLength={30}
      placeholder="Confirm your password..."
      required=""
    />
    <InputWrapper
      type="tel"
      placeholder="Enter your phone number..."
      pattern="(00|\+)[\d]{7,12}"
    />
    <Fieldset>
     

    <CheckboxLabel
      initial={isChecked && {color:MyLabel.checkedColor}}
      whileHover={{backgroundColor:MyLabel.hoverColor}}
        htmlFor="accept-terms"
      >
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={()=> setIsChecked(!isChecked)}
        defaultValue="I accept terms & Conditions"
        placeholder="I accept terms & Conditions"
        name="accept-terms"
        id="accept-terms"
        required=""
      />

        I accept terms &amp; Conditions
    </CheckboxLabel>


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
  </Form>
</ Wrapper>

    )
}

export default RegistrationForm;