import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type UseAxiosReturnType<T> = {
  data: T | null;
  error: AxiosError<any> | null;
};

function useAxios<T>(url: string): UseAxiosReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
}

export default useAxios;
