import { useCallback, useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generateCall = useCallback((url, method, body, headers) => {
    // get arguments and call API on URL by method attahcing body and headers
  }, []);

  return { isLoading, errorMessage, generateCall };
};
