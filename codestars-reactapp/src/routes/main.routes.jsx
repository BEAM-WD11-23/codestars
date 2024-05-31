import { createBrowserRouter} from "react-router-dom";

import Feed from "/src/pages/Feed";
import Login from "/src/pages/LogIn/LogIn";
import Profile from "/src/pages/profile/Profile";
import App from "/src/App";
import Notifications from "/src/pages/notifications/Notifications";
import RegistrationFrom from "/src/pages/RegistrationForm/RegistrationForm.jsx"

export const router = createBrowserRouter([
  {element: <App />, children: [
    {path: "/", element: <Feed />},
    {path: "login", element: <Login/>},
    {path: "profile", element: <Profile/>},
    {path: "notifications", element: <Notifications/>},
    {path: "registration", element: <RegistrationFrom/>},

  ]},
])