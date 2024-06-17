import { createContext, useState } from "react";
import { Outlet } from "react-router";

export const MessageContext = createContext(null)

function MessageProvider({children}) {
    const [messages, setMessages] = useState(null)
  return (
    <MessageContext.Provider value={{messages, setMessages}}>
        {children}
    </MessageContext.Provider>
  )
}
export default MessageProvider