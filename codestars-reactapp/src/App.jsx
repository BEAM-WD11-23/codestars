import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    {/* Outlet marks the place where Router should render pages. */}
      <Outlet />
    </>
  )
}

export default App