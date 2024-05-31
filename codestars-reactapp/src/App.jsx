import './App.css'
import Feed from './pages/Feed.jsx'
import Navbar from './components/navigation/Navigation';
import Notifications from './pages/notifications/Notifications';
import Header from './components/header/Header'
import RegistrationForm from './pages/RegistrationForm/RegistrationForm.jsx'
import Postcard from './components/postcard/Postcard.jsx';
// import RegistrationForm from './pages/RegistrationForm/RegistrationForm.jsx'

function App() {

  return (
    <>
        {/* Here you are supposed to use components */}
        {/* <Feed /> */}
        {/* <Notifications /> */}
        <RegistrationForm />
    </>
  )
}

export default App