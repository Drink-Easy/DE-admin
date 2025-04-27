import { useQuery } from "react-query";
import { getWineSearch, WineSearchParams } from "../api/getWineSearch";

interface UseGetWineSearchProps extends WineSearchParams {
  trigger: number; // trigger 추가
}

export function useGetWineSearch({
  searchName,
  wineSort,
  wineVariety,
  wineCountry,
  page,
  size,
  sort,
  trigger,
}: UseGetWineSearchProps) {
  const { data } = useQuery(
    ["getMonthHoney", trigger],
    () =>
      getWineSearch({
        searchName,
        wineSort,
        wineVariety,
        wineCountry,
        page,
        size,
        sort,
      }),
    {
      onError: (error) => {
        console.log("에러 발생", error);
      },
    }
  );

  return { data };
}
