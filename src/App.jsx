import './App.css'
import { Outlet } from 'react-router'
import ChatsPage from './pages/Chats/Chats.page';

function App() {
    return (
        <div className='App'>
            <Outlet /> {/* Outlet marks the place where Router should render pages. */}
        </div>
    )
}

export default App;
