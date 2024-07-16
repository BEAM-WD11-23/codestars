import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router"

function TestLogin() {
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const initialValues = {
        username:'',
        password:''
    }

    async function handleSubmit({ username, password }, { resetForm, setSubmitting }){
        // localhost:4800/api/auth/login -> {username, password}
        setSubmitting(true)
        if(!username || !password) {
            setSubmitting(false)
            alert('Username or Password must not be empty')
            return
        }
        try {
            const AxiosResponse = await axios.post('http://localhost:4800/api/auth/login', { username, password })
            setError(null)
            setMessage('You are logged in successfully')
            resetForm()
            localStorage.setItem('token', AxiosResponse.data.token)
            setTimeout(()=>{
                navigate('/')
            }, 1000)
        }
        catch(err){
            setMessage(null)
            setSubmitting(false)
            setError({message:err.message, status:err?.response?.status})
        }
    }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik)=>(
            <>
            <h1>Log in user</h1>
            {message && <h3>{message}</h3>}
            {error && <h3>Status:{error.status} | {error.message}</h3>}
            <Form style={{display:'flex', flexDirection:'column', padding:'2em'}}>
                <Field name='username' placeholder='Enter username...' />
                <Field name='password' placeholder='Enter password...' />
                <button type='submit' disabled={formik.isSubmitting}>Login</button>
            </Form>
            </>
        )}
    </Formik>
  )
}
export default TestLogin