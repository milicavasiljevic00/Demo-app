import { RoleAdmin } from "../../pages/admin-users/RoleAdmin";
import { UserContactInfo } from "../register-form-value/UserContactInfo";

export type AdminUserFormValue = {
  username: string;
  firstName: string;
  lastName: string;
  userContactInfo: UserContactInfo;
  role: RoleAdmin | null;
};
