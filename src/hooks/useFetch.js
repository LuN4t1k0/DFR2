import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(URL);
        const response = await request.json();
        setData(response);
  
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [URL]);
  return data;
};

export default useFetch;
