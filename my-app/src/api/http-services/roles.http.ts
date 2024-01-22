import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Role } from "../../models/entities/Role";
import { AxiosResponse } from "axios";
import { getRequest } from "../axios-client/axios-client";

export class RoleHttp extends AxiosAbstract<Role> {
  constructor() {
    super("ROLES");
  }

  getRoles(
    query?: string
  ): Promise<AxiosResponse<Role[]>> {
    return getRequest(this.httpRoute);
  }
}