import { RoleAdmin } from "../../pages/admin-users/RoleAdmin";
import { UserRoles } from "../../routes/UserRoles";
import { Role } from "../entities/Role";
import { RegisterFormValue } from "../register-form-value/RegisterFormValue";
import { UserContactInfo } from "../register-form-value/UserContactInfo";

export type AdminUserFormValue = {
    username: string,
    firstName: string,
    lastName: string,
    userContactInfo: UserContactInfo,
    role: RoleAdmin | null;
}