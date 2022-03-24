import { useEffect, useState } from "react";

const useLoader = (url: string) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
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

export default useLoader;
