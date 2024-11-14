import { useEffect, useState } from "react";

function useFetch(url: string, init?: RequestInit) {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const result = await fetch(url, init);
        const parsedResult = await result.json();
        if (result.status === 200) {
          setData(parsedResult);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, init]);
  return { data, error, loading };
}

export default useFetch;
