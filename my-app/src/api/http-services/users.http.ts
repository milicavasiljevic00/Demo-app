import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { User } from "../../models/entities/User";
import { AxiosResponse } from "axios";
import { getCredentials, getRequest, postRequest, setCredentials } from "../axios-client/axios-client";
import { RegisterFormValue } from "../../models/register-form-value/RegisterFormValue";
import { LoginFormValue } from "../../models/login-form-value/LoginFormValue";
import { CreateUserResponse } from "../helpers/CreateUserResponse";
import { UserContent } from "../../context/UserContent";

export class UserHttp extends AxiosAbstract<User> {
  constructor() {
    super("USERS");
  }

  getUsers(
    query?: string
  ): Promise<AxiosResponse<User[]>> {
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
  
}