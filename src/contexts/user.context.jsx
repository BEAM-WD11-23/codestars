import { createContext, useState } from "react";
import { Outlet } from "react-router";

export const UserContext = createContext(null)

function UserProvider({children}) {
    const [loggedinUser, setLoggedinUser] = useState("Relando V.")
  return (
    <UserContext.Provider value={{loggedinUser, setLoggedinUser}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserProvider