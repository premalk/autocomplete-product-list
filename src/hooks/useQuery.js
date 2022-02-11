import { useState } from 'react';
import papa from 'papaparse';

const file = require('../products.csv');

const useQuery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  papa.parse(file, {
    header: true,
    download: true,
    skipEmptyLines: true,
    complete: (results) => {
      setIsLoading(false);
      setData(results?.data);
    },
    error: () => {
      setIsError(true);
    }
  });
  return {
    data,
    isLoading,
    isError
  };
};

export default useQuery;
