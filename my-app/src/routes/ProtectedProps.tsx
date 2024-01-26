import { ReactElement } from "react";
import { UserRoles } from "./UserRoles";

export interface ProtectedProps {
  role: UserRoles[];
  content: ReactElement;
}
