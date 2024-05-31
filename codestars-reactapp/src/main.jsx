import './index.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/main.routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


// import 'bootstrap/dist/css/bootstrap.min.css';