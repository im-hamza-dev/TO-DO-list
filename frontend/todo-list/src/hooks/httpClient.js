import { useCallback, useState } from "react";
import axios from "axios";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generateCall = useCallback(
    async (url, method = "Get", body, headers) => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        let res = await axios({
          url,
          method,
          body,
          headers,
        });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setErrorMessage(err);
      }
    },
    []
  );

  return { isLoading, errorMessage, generateCall };
};
