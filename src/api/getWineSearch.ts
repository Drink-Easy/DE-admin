import { customAxios } from "./customAxios";
import { Response } from "../types/Response";

export interface PageResult<T> {
  content: T[];
  pageNumber: number;
  totalPages: number;
}

export interface WineDtoDataTypes {
  wineId: number;
  name: string;
  sort: string;
  variety: string;
  country: string;
  region: string;
  createdAt: string;
}

export interface WineSearchParams {
  searchName?: string | null;
  wineSort?: string | null;
  wineVariety?: string | null;
  wineCountry?: string | null;
  page?: number; // page, size, sort는 기본값 채워서 nullable 안 해도 됨..
  size?: number;
  sort?: string;
}

export async function getWineSearch(params: WineSearchParams) {
  const {
    searchName = null,
    wineSort = null,
    wineVariety = null,
    wineCountry = null,
    page = 0, // 기본 0페이지
    size = 7, // 기본 7개 가져오기
    sort = "name,ASC", // 기본 name 오름차순pre
  } = params;
  // 입력된 것만 params 객체로 만들기
  const queryParams = Object.fromEntries(
    Object.entries({
      searchName,
      wineSort,
      wineVariety,
      wineCountry,
      page,
      size,
      sort,
    }).filter(([, v]) => v !== null && v !== undefined)
  );

  const { data } = await customAxios.get<
    Response<PageResult<WineDtoDataTypes>>
  >(`/admin/wine`, {
    params: queryParams,
  });

  return data;
}
