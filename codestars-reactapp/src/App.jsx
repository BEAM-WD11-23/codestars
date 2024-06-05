import './App.css'
import { Outlet } from 'react-router'
import RegistrationFormik from './pages/RegistrationForm/RegistrationForm'

function App() {
  return (
    <>
    {/* Outlet marks the place where Router should render pages. */}
      <RegistrationFormik />
    </>
  )
}

export default App;
