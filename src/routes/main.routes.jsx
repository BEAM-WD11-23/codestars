import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import App from '../App';
import Notifications from '../pages/notifications/Notifications';
import PageNotFound from '../pages/404/PageNotFound';
import Feed from '../pages/feed/Feed';
import Messages from "../pages/messages/Messages";
import UserRow from "../components/User_info_and_NAV_MESSAGES/userInfo.Nav";
import MessageBubbleComponent from "../components/MessageBubble/MessageBubble";
import Form_Messages from "../components/Form_Messages/Form_Messages";
import NewPostForm from "../pages/newpost/NewPostForm";
import RegistrationFormik from '../pages/RegistrationForm/RegistrationForm';
import NavigationLayout from "../layouts/NavigationLayout";
import Profile from "../pages/profile/Profile";
import UserProvider from "../contexts/user.context";
import MessageProvider from "../contexts/message.context";
import PostProvider from "../contexts/post.context";
import MainProvider from "../contexts/main.provider";

export const router = createBrowserRouter(
    createRoutesFromElements(
                <Route element={<MainProvider providers={[UserProvider, MessageProvider, PostProvider]} />}>
                    <Route path="/" element={<App />} errorElement={<PageNotFound />}>
                        <Route element={<NavigationLayout />}>
                            <Route index element={<Feed />}/>
                            <Route path="search" element={<PageNotFound/>}/>
                            <Route path="create-post" element={<NewPostForm/>}/>
                            <Route path="messages" element={<Messages/>}/>
                            <Route path="notifications" element={<Notifications/>}/>
                            <Route path="profile" element={<Profile />}/>
                        </Route>
                        <Route path="register" element={<RegistrationFormik/>}/>
                        <Route path="daniel" element={<UserRow/>}/>
                        <Route path="daniel2" element={<MessageBubbleComponent/>}/>
                        <Route path="daniel3" element={<Form_Messages/>}/>
                    </Route>
                </Route>
    )
)

// export const router = createBrowserRouter([
//     {element: <App />, errorElement: <PageNotFound />, children: [
//         {element: <NavigationLayout />, children: [
//             {path: "/", element: <Feed />},
//             {path: "search", element: <PageNotFound />},
//             {path: "create-post", element: <NewPostForm />},
//             {path: "messages", element: <Messages />},
//             {path: "notifications", element: <Notifications />},
//             {path: "profile", element: <Profile />},
//         ]},
//         {path: "register", element: <RegistrationFormik />},
//         {path: "daniel", element: <UserRow />},
//         {path: "daniel2", element: <MessageBubbleComponent/>},
//         {path: "daniel3", element: <Form_Messages/>},
//     ]},
// ])