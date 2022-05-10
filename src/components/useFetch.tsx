import { useState, useEffect } from "react";
import api from "./api/posts";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");
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
