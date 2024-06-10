import styled, {keyframes } from "styled-components";
import { motion } from "framer-motion";
import waveImg from "/src/assets/sasha_assets/icons/wave.png";


export const Login = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
overflow-x: hidden;
background-color: #0618716b;
width: 90%;
padding: 2em;
padding-top:0;
margin: auto;
box-sizing: border-box;
border-radius: 2vh;
box-shadow: 2px 2px 7px rgba(0 0 0 /.5);

&::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10em;
    background-image: url(${waveImg});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .8; 
  }
`

export const Login__Title = styled.h1`
display: block;
font-size: 2em;
color: white;
padding-top: 1em;
margin-bottom: 2em;
box-sizing: border-box;
z-index: 9999;
`

export const Login__InputWrapper = styled.div`
background-color: white;
display: block;
position: relative;
min-width: 95%;
flex: 1;
padding: .4em;
border-radius: 1vh;
font-size: 1.2em;
box-sizing: border-box;
border: 3px solid gray;

  &::after{
    content: "Username or Email";
    font-family: sans-serif;
    position: absolute;
    top: -11px;
    left: 8px;
    color: black;
    font-size: .8em;
    background-color: transparent;
    padding-inline: .5em;
    }
`

export const Login__Input = styled.input`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 100%;
border-radius: 1vh;
font-size: 1.2em;
border: none;
outline: none;
color: black;
z-index: 9999;
    &:hover{
        border: none;
        outline: none;
    }

    &:focus{
        border: none;
        outline: none;
    }

    &:active{
        border: none;
        outline: none;
    }
`

export const Login__ErrorWrapper = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: .4em;
padding-top: .3em;
padding-bottom: 1em;
`

export const Login__ErrorIcon = styled.img`
display: block;
width: 1.2em;
height: 1.2em;
`

export const Login__ErrorMessage = styled.p`
color: darkred;
font-size: 1em;
`

export const Login__RememberForgotWrapper = styled.div`
min-width: 95%;
flex: 1;
/* background-color: limegreen; */
display: flex;
justify-content: space-between;
align-items: center;
padding: .1em;
font-size: 1em;
color: black;
box-sizing: border-box;
margin-bottom: 1em;
`

export const Login__RememberCheckBoxLabel = styled.label`
/* background-color: pink; */
display: flex;
min-width: 50%;
padding: .2em;
box-sizing: border-box;
`
export const Login__RememberCheckBox = styled.input`
margin-right: .5em;
`

export const Login__RememberCheckBoxp = styled.p`
font-size: 1.1em;
color: black;
`

export const Login__ForgotPassLink = styled.a`
font-size: 1.1em;
color: black;
text-align: center;;
justify-self: stretch;
padding-inline: .5em;
padding-block: .2em;
text-decoration: none;
/* background-color: green; */
`

export const Login__Btn = styled.button`
flex: 1;
min-width: 90%;
padding: .4em 5em;
border-radius: 100vh;
background-color: white;
color: black;
font-size: 1.2em;
margin-bottom: .3em;
`

export const Login__LoginLinkWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1.3em;
/* background-color: red; */
padding: .6em 1em;
gap: .7em;
`

export const Login__DontHaveAccount = styled.p`
font-size: 1.1em;
color: black;
`

export const Login__LoginLink = styled.a`
font-size: 1.1em;
color: blue;
text-decoration: none;
`


export const Login__ConnectorHr = styled.hr`
width: 90%;
border-width: 1px;
margin-bottom: 2em;
`


export const Login__AccountLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
min-width: 90%;
padding: .3em;
border-radius: 1vh;
background-color: white;
color: black;
font-size: 1.2em;
margin-bottom: 1em;
`

export const Login__Logo = styled.img`
display: block;
width: 1.4em;
height: 1.4em;
margin-right: .5em;
`