import axios, { AxiosResponse } from "axios";
import { FetchedApiData } from "~/types/ApiData";

export const httpClient = axios.create({
  baseURL: "https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data",
});

httpClient.interceptors.response.use(
  (res: AxiosResponse<FetchedApiData>) =>
    res.data.data.siteData.testTaskTemplate_30_15673,
);
