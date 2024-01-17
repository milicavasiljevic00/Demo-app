import { useContext, useState, useEffect } from "react"
import { UserContent, UserContentState } from "./UserContent"
import { UserHttp } from "../api/http-services/users.http";
import { USER_LOGGED_KEY } from "../constants/Constants";
import { UserContext } from "./UserContext";

const useUserContext = () => useContext(UserContext)

const UserContextProvider = ({ children }: any) => {

    const userHttp = new UserHttp();
    const [user, setUser] = useState<UserContent>(UserContentState);

    const fetchData = async () => {

        try{
            const response = await userHttp.getUserMe();
            setUser(response.data);
        }
        catch(error){
            console.error("An error occurred:", error);
            alert("Oops! Something went wrong. Please try again.");
        }
    }

    useEffect(() => {

        if (localStorage.getItem(USER_LOGGED_KEY)) {

        fetchData().catch(console.error);
        }

    },[])

    function logIn(user:UserContent) {
        setUser(user);
    }

    function logOut() {
        setUser(UserContentState);
        localStorage.removeItem(USER_LOGGED_KEY);
    }
    
    return (
        <UserContext.Provider value={{user, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}
export { useUserContext, UserContextProvider}