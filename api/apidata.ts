import { httpClient } from "~/utils/httpClient";
import { ApiData } from "~/types/ApiData";

export function getApiData(): Promise<ApiData> {
  return httpClient.get("");
}
