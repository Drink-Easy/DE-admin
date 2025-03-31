import { useMutation } from "react-query";
import { postLogout } from "../api/postLogout";

export function usePostLogout() {
  return useMutation(postLogout, {
    onSuccess: () => {
      console.log("로그아웃 성공");
    },
    onError: (error) => {
      console.log("로그아웃 실패", error);
    },
  });
}
