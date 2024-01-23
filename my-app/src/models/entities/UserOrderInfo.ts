import { UserContactInfo } from "../register-form-value/UserContactInfo";

export interface UserOrderInfo {
    firstName: string;
    lastName: string;
    username: string;
    userContactInfo: UserContactInfo;
}