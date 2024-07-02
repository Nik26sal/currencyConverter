import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {

fetch(`http://localhost:4500/${currency}`)
  .then((res) => res.json())
  .then((data) => {
    setData(data);
  })
  .catch((error) => console.error("Error fetching currency data:", error));

  }, [currency]);

  return data;
}

export default useCurrencyInfo;
