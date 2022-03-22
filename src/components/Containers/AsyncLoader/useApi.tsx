import { useEffect, useState } from "react";

const useApi = (url: string) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        setData(response.json() as any);
      })
      .catch((err) => {
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, errors, loading };
};

export default useApi;
