import { UserRoles } from "../../routes/UserRoles";

export interface Role {
  id: number;
  role: keyof typeof UserRoles;
}
