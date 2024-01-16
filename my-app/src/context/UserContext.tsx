import { createContext, useContext, useState, useEffect } from "react"
import { UserContent, UserContentState } from "./UserContent"
import { UserHttp } from "../api/http-services/users.http";
import { setCredentials, getCredentials } from "../api/axios-client/axios-client";

type ContainerProps = {
    children:React.ReactNode;
}

type UserContextValue = {
    user: UserContent;
    logIn: (user: UserContent) => void;
    logOut: () => void;
}

export const UserContext = createContext<UserContextValue>({user:UserContentState, logIn: () => {}, logOut: () => {}});

const useUserContext = () => useContext(UserContext)

const UserContextProvider = (props: ContainerProps) => {

    const userHttp = new UserHttp();
    const [user, setUser] = useState<UserContent>(UserContentState);

    useEffect(() => {

        if (localStorage.getItem("user-logged")) {

            const fetchData = async () => {
                const response = await userHttp.getUserMe();
                setUser(response.data);
            }

        fetchData().catch(console.error);
        }

    },[])

    function logIn(user:UserContent) {
        setUser(user);
    }

    function logOut() {
        setUser(UserContentState);
        localStorage.removeItem("user-logged");
    }
    
    return (
        <UserContext.Provider value={{user, logIn, logOut}}>
            {props.children}
        </UserContext.Provider>
    )
}
export { useUserContext, UserContextProvider}

