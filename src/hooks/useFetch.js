import { useEffect } from "react";

const useFetch = (URL) => {

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(URL);
        const response = await request.json();
        console.log(response)
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [URL]);
};

export default useFetch;
