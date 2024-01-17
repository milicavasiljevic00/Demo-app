import { createContext } from "react"
import { UserContentState } from "./UserContent"
import { IUserContext } from "./IUserContext";

export const UserContext = createContext<IUserContext>({user:UserContentState, logIn: () => {}, logOut: () => {}});



