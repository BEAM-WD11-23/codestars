import './App.css'
import { Outlet } from 'react-router'
import { getAllMessages } from './services/messages.service';

function App() {
    const {isPending, messages, errors} = getAllMessages()

    console.log("isPending", isPending);
    console.log("messages", messages);
    console.log("errors", errors);

    return (
        <div className='App'>
            <Outlet /> {/* Outlet marks the place where Router should render pages. */}
        </div>
    )
}

export default App;
