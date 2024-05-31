import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import RegistrationForm from '../pages/RegistrationForm/RegistrationForm'
import Notifications from '../pages/notifications/Notifications'
import Feed from '../pages/Feed'

export const router = createBrowserRouter([
    { element: <App />, children: [
      {path: "/", element: <Feed />},
      {path: "register", element: <RegistrationForm />},
      {path: "notifications", element: <Notifications />}
    ]},
  ])