import ReactDOM from 'react-dom/client'
import {router} from "/src/routes/main.routes"
import './index.css'
import {RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
