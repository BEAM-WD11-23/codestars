import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import RegistrationForm from '../pages/RegistrationForm/RegistrationForm'
import Notifications from '../pages/notifications/Notifications'
import PageNotFound from '../pages/404/PageNotFound'
import Feed from '../pages/Feed'
import Messages from "../pages/Messages";
import UserRow from "../components/User_info_and_NAV_MESSAGES/userInfo.Nav";
import MessageBubble from "../components/MessageBubble/MessageBubble";
import ExampleComponent from "../components/MessageBubble/MessageBubble";
import MessageBubbleComponent from "../components/MessageBubble/MessageBubble";
import Form from "../components/Form_Messages/Form_Messages";
import Form_Messages from "../components/Form_Messages/Form_Messages";
import NewPostForm from "../pages/newpost/NewPostForm";
import RegistrationFormik from '../pages/RegistrationForm/RegistrationForm'


export const router = createBrowserRouter([
    { element: <App />, errorElement: <PageNotFound />, children: [
      {path: "/", element: <Feed />},
      {path: "register", element: <RegistrationFormik />},
      {path: "notifications", element: <Notifications />},
      {path: "404", element: <PageNotFound />},
      {path: "search", element: <PageNotFound />},
      {path: "create-post", element: <NewPostForm />},
      {path: "messages", element: <Messages />},
      {path: "daniel", element: <UserRow />},
      {path: "daniel2", element: <MessageBubbleComponent/>},
      {path: "daniel3", element: <Form_Messages/>},



      // {path: "test", element: <RegistrationForm />}
    ]},
  ])
