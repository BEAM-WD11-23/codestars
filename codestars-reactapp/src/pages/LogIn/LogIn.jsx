import { useState } from 'react';
import { AnimatePresence, animate } from 'framer-motion';
import Header from '/src/components/header/Header.jsx';
import Navigation from '/src/components/navigation/Navigation.jsx';
import * as LogInForm from "/src/pages/LogIn/Login.styled.jsx";
import '/src/pages/LogIn/Login.style.css';
import googleLogo from "/src/assets/sasha_assets/icons/google.png";
import githubLogo from "/src/assets/sasha_assets/icons/github.png"
import errorLogo from "/src/assets/sasha_assets/icons/warning.png";

function Login(){

    return(
        <>
            <Header />

            <LogInForm.Login>

                {/* <LogInForm.Login__TitleWrapper> */}
                    <LogInForm.Login__Title>Log In</LogInForm.Login__Title>
                {/* </LogInForm.Login__TitleWrapper> */}
                
             
                <LogInForm.Login__Input 
                whileHover={{boxShadow: "2px 2px 7px rgba(0 0 0 /.5)"}}
                whileFocus={{boxShadow: "2px 2px 7px rgba(0 0 0 /.5)"}}
                type="text" 
                name="username"
                value="" 
                // placeholder="Username or Email"
                pattern="/^(?:\w+|\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-z]{2,4})+)$/gm"
                required=""
                ></LogInForm.Login__Input>
          

                <LogInForm.Login__ErrorWrapper>
                    <LogInForm.Login__ErrorIcon src={errorLogo}></LogInForm.Login__ErrorIcon>
                    <LogInForm.Login__ErrorMessage>Try again with a valid username or mail.</LogInForm.Login__ErrorMessage>
                </LogInForm.Login__ErrorWrapper>
                
                <LogInForm.Login__Input 
                whileHover={{boxShadow: "2px 2px 7px rgba(0 0 0 /.5)"}}
                whileFocus={{boxShadow: "2px 2px 7px rgba(0 0 0 /.5)"}}
                type="password" 
                name="password"
                value="" 
                // placeholder="Enter your Password"
                pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm"
                required=""
                ></LogInForm.Login__Input>

                <LogInForm.Login__ErrorWrapper>
                    <LogInForm.Login__ErrorIcon src={errorLogo}></LogInForm.Login__ErrorIcon>
                    <LogInForm.Login__ErrorMessage>Sorry, that password isn't correct. We can help you recover your password.</LogInForm.Login__ErrorMessage>
                </LogInForm.Login__ErrorWrapper>


                <LogInForm.Login__RememberForgotWrapper>

                        <LogInForm.Login__RememberCheckBoxLabel 
                        htmlFor="remember">
                            <LogInForm.Login__RememberCheckBox 
                            type="checkbox" 
                            name="rememberpass"
                            value="remember" 
                            id="remember"
                            ></LogInForm.Login__RememberCheckBox>
                            <LogInForm.Login__RememberCheckBoxp>Remember me</LogInForm.Login__RememberCheckBoxp>
                        </LogInForm.Login__RememberCheckBoxLabel>
                 
                        <LogInForm.Login__ForgotPassLink>Forgot Password?</LogInForm.Login__ForgotPassLink>

                </LogInForm.Login__RememberForgotWrapper>

               <LogInForm.Login__Btn>Log In</LogInForm.Login__Btn>

                <LogInForm.Login__LoginLinkWrapper>
                    <LogInForm.Login__DontHaveAccount>Don't have a account?</LogInForm.Login__DontHaveAccount>
                    <LogInForm.Login__LoginLink>Register</LogInForm.Login__LoginLink>
                </LogInForm.Login__LoginLinkWrapper>

            
                <LogInForm.Login__ConnectorHr></LogInForm.Login__ConnectorHr>
             

                <LogInForm.Login__AccountLink>
                    <LogInForm.Login__Logo src={googleLogo}></LogInForm.Login__Logo>
                    Continue with Google
                </LogInForm.Login__AccountLink>

                <LogInForm.Login__AccountLink>
                    <LogInForm.Login__Logo src={githubLogo}></LogInForm.Login__Logo>
                    Continue with Github
                </LogInForm.Login__AccountLink>
            </LogInForm.Login>

            <Navigation />
        </>
    )
}

export default Login;