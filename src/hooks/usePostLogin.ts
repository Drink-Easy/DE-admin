import { useMutation, UseMutationResult } from "react-query";
import { postLogin, LoginResponse } from "../api/postLogin";
import { Response } from "../types/Response";
import { AxiosError } from "axios";
import { Cookies } from "react-cookie";
import { setCookie, getCookie } from "../api/cookie";

const cookies = new Cookies();

export function usePostLogin(): UseMutationResult<
  Response<LoginResponse>, // 반환하는 데이터 타입
  AxiosError,
  { username: string; password: string }
> {
  return useMutation<
    Response<LoginResponse>,
    AxiosError,
    { username: string; password: string }
  >(
    async (props) => {
      const axiosResponse = await postLogin(props);
      return axiosResponse.data; // Axios 응답 객체에서 data만 반환
    },
    {
      onSuccess: () => {
        console.log("로그인 성공");

        // 쿠키에 임의의 값을 설정
        setCookie("testCookie", "testValue", { path: "/" });

        // 설정한 쿠키 값을 가져와서 출력
        const testValue = getCookie("testCookie");
        console.log("설정한 쿠키 값:", testValue);

        console.log(cookies.getAll());
      },
      onError: (error) => {
        console.log("로그인 실패", error);
        alert("로그인 실패");
      },
    }
  );
}
