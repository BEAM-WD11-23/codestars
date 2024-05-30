import { useState } from 'react';
import { motion } from 'framer-motion';
import './RegistrationForm.style.css';
import { Wrapper, InputWrapper, Form, Fieldset, SubmitBtn } from './RegistrationForm.styled';
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
     

      {/* <label htmlFor="accept-terms">I accept terms &amp; Conditions</label> */}

      {/* <label 
      style={{ 

        backgroundColor: isClicked ? MyLabel.clickedColor : MyLabel.defaultColor,

        backgroundColor: isHovered ? MyLabel.hoverColor : MyLabel.defaultColor,

      }}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}


      onMouseUpCapture={() => setIsClicked(true)}
      htmlFor="accept-terms"
    >
      I accept terms &amp; Conditions
    </label> */}

<motion.label
      initial={isChecked && {color:MyLabel.checkedColor}}
      // whileHover={{backgroundColor:MyLabel.hoverColor}}
        htmlFor="accept-terms"
      >
         <InputWrapper
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
      </motion.label>


    </Fieldset>
    <br />
    <SubmitBtn
        type="submit">Create Account</SubmitBtn>
            
    <br />

    <h5>Already have an account?</h5> <a href="'">Login</a>
  </Form>
</ Wrapper>

    )
}

export default RegistrationForm;