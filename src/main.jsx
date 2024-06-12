import './index.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/main.routes';
import { StrictMode } from 'react';



ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)


// import 'bootstrap/dist/css/bootstrap.min.css';