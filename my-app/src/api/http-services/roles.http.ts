import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Role } from "../../models/entities/Role";

export class RoleHttp extends AxiosAbstract<Role> {
  constructor() {
    super("ROLES");
  }
}