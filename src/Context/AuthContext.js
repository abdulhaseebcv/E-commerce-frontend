import axios from "../Config";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null)

function AuthContext({ children }) {
    const [user, setUser] = useState(null)

    const getCurrentUser = async () => {
        const userId = await localStorage.getItem('userId')
        console.log('userIds: ', userId);
        axios.get(`/user/${userId}`).then((res) => {
            console.log('resuser: ', res);
            setUser(res?.data)
        })
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext