import { useState, useEffect } from 'react';

export const useJSONValidation = (initialJSON: string) => {
  const [json, setJson] = useState(initialJSON);
  const [error, setError] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<any | null>(null);

  useEffect(() => {
    try {
      const data = JSON.parse(json);
      setParsedData(data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON');
      setParsedData(null);
    }
  }, [json]);

  return { json, setJson, error, parsedData };
};
