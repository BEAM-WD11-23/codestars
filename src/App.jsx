import './App.css'
import { Outlet } from 'react-router'

function App() {
    return (
        <div className='App'>
            <Outlet /> {/* Outlet marks the place where Router should render pages. */}
        </div>
    )
}

export default App;
