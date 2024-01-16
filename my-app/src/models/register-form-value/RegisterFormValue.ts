import { UserContactInfo } from "./UserContactInfo"

export type RegisterFormValue = {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    userContactInfo: UserContactInfo 
}