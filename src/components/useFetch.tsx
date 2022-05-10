import { useState, useEffect } from "react";
import api from "./api/posts";
import { Item } from "./model";
const useFetch = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Item>();
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/posts${id ? `/${id}` : null}`);
        setData(response.data);
        setIsLoading(false);
        setError(null);
      } catch (err: any) {
        if (err.response) {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        } else {
          setError(`Error: ${err.message}`);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, []);
  return { data, isLoading, error };
};
export default useFetch;
