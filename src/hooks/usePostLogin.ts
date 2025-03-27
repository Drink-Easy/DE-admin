import { useMutation, UseMutationResult } from "react-query";
import { postLogin, LoginResponse } from "../api/postLogin";
import { Response } from "../types/Response"; // Response 타입을 가져옵니다.
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export function usePostSignIn(): UseMutationResult<
  Response<LoginResponse>, // 반환하는 데이터 타입
  AxiosError,
  { username: string; password: string }
> {
  const navigate = useNavigate();

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
        navigate("/class");
      },
      onError: () => {
        alert("로그인 실패");
      },
    }
  );
}
