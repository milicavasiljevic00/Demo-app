import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { User } from "../../models/entities/User";
import { AxiosResponse } from "axios";
import { deleteRequest, getCredentials, getRequest, postRequest, putRequest, setCredentials } from "../axios-client/axios-client";
import { RegisterFormValue } from "../../models/register-form-value/RegisterFormValue";
import { LoginFormValue } from "../../models/login-form-value/LoginFormValue";
import { CreateUserResponse } from "../helpers/CreateUserResponse";
import { UserContent } from "../../context/UserContent";
import { AdminUserFormValue } from "../../models/admin-user-form-value/AdminUserFormValue";
import { UserForAdmin } from "../../models/entities/UserForAdmin";

export class UserHttp extends AxiosAbstract<User> {
  constructor() {
    super("USERS");
  }

  getUsers(
    query?: string
  ): Promise<AxiosResponse<UserForAdmin[]>> {
    return getRequest(this.httpRoute, {
      responseType: "json",
      params: {
        q: query,
      },
    });
  }

  registerUser(
    body?: RegisterFormValue
  ): Promise<AxiosResponse<Object>> {
    return postRequest(this.httpRoute, body);
  }

  loginUser(
    body?: LoginFormValue
  ): Promise<AxiosResponse<UserContent>> {
    return postRequest(this.httpRoute + "/auth", body);
  }

  getUserMe(
    query?: string
  ): Promise<AxiosResponse<UserContent>> {
    return getRequest(this.httpRoute + "/me");
  }

  addUser(
    body?: AdminUserFormValue
  ): Promise<AxiosResponse<Object>> {
    return postRequest(this.httpRoute + "/with-role", body);
  }

  deleteUser(
    id: number
  ): Promise<AxiosResponse<void>> {
    return deleteRequest(`${this.httpRoute}/${id}`);
  }

  editUser(
    id: number,
    body?: UserForAdmin
  ): Promise<AxiosResponse<void>> {
    return putRequest(`${this.httpRoute}/${id}`, body);
  }

}