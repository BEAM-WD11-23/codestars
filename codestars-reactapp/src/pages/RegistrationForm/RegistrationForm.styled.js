import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik"
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #041455;
    color: white;
    margin: 2em;
    border-radius: 7px;
    box-shadow: 3px 3px 7px lightgray;
    padding-top: 0.5em;
    padding-bottom: 0.8em;
`
export const InputWrapper =styled(Field)`
    /* background-color: yellowgreen; */
    border: 1px solid gray;
    width: 100%;
    margin: .7em;
    padding: 0.5em;
`

export const RegForm = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 1em; */
`

export const Fieldset = styled.fieldset`
    margin: .7em;
    border-radius: 7px;
`
export const CheckboxLabel =styled(motion.label)`
     /* background-color: yellow; */
    display: flex;
    align-items: stretch;
    padding: .7em ;
`

export const Checkbox = styled(motion.input)`
    margin-right: 1em;
   

`

export const SubmitBtn = styled.button`
background-color: beige;
    /* color: white; */
    padding: .5em;

`