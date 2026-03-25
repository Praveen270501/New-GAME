import apiClient from "@/services/api-client";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FeatchGeneraResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoadeing] = useState(false);
  /// Added the comment
  useEffect(
    () => {
      setLoadeing(true);
      apiClient
        .get<FeatchGeneraResponse<T>>(endPoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoadeing(false);
        })
        .catch((error) => {
          setErrorMsg(error.message);
          setLoadeing(false);
        });
    },
    deps ? [...deps] : [],
  );

  return { data, errorMsg, isLoading };
};

export default useData;
