import { customAxios } from "./customAxios";

export async function postLogout() {
  const { data } = await customAxios.post(`/logout`);

  return data;
}
