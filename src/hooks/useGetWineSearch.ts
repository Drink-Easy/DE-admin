import { useQuery } from "react-query";
import { getWineSearch, WineSearchParams } from "../api/getWineSearch";

export function useGetWineSearch({
  searchName,
  wineSort,
  wineVariety,
  wineCountry,
  page,
  size,
  sort,
}: WineSearchParams) {
  const { data } = useQuery(
    [
      "getMonthHoney",
      searchName,
      wineSort,
      wineVariety,
      wineCountry,
      page,
      size,
      sort,
    ],
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
