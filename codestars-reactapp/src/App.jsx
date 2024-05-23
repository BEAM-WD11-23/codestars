import Header from './components/header/Header.jsx'
import Navigation from './components/nav/Nav.jsx'
import './App.css'
import Postcard from './components/postcard/Postcard.jsx'

function App() {

  return (
    <>
      {/* Here you are supposed to use components */}
        < Postcard /> 
      {<Nav/>}
      {<Navigation/>}
    </>
  )
}

export default App