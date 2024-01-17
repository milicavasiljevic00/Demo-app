import { UserContent } from "./UserContent";

export interface IUserContext{
    user: UserContent;
    logIn: (user: UserContent) => void;
    logOut: () => void;
}