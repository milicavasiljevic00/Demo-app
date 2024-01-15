import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { User } from "../../models/entities/User";
import { AxiosResponse } from "axios";
import { getRequest, postRequest } from "../axios-client/axios-client";
import { RegisterFormValue } from "../../models/register-form-value/RegisterFormValue";
import { LoginFormValue } from "../../models/login-form-value/LoginFormValue";

interface CreateUserResponse {
    message: string;
    statusCode: number;
    time: string;
  }

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
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return postRequest(this.httpRoute, body);
  }

  loginUser(
    body?: LoginFormValue
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return postRequest(this.httpRoute + "/auth", body);
  }
  
}