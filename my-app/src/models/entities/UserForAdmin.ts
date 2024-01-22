import { Role } from "./Role";

export interface UserForAdmin {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: Role;
}