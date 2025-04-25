import { customAxios } from "./customAxios";
import { AxiosResponse } from "axios";
import { Response } from "../types/Response";

interface postSignInTypes {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  role: string;
  isFirst: boolean;
}

export async function postLogin(
  props: postSignInTypes
): Promise<AxiosResponse<Response<LoginResponse>>> {
  const { username, password } = props;

  const response: AxiosResponse<Response<LoginResponse>> =
    await customAxios.post<Response<LoginResponse>>("/login", {
      username,
      password,
    });

  return response;
}
