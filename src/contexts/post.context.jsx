import { createContext, useState } from "react";
import { Outlet } from "react-router";

export const PostContext = createContext()

function PostProvider({children}) {
    const [post, setPost] = useState("Some nice post.")
    return (
        <PostContext.Provider value={{post, setPost}}>
            {children}
        </PostContext.Provider>
    )
}
export default PostProvider
