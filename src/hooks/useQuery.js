import { useState, useEffect } from 'react';
import { csv } from 'd3';

const file = require('../products.csv');

const useQuery = () => {
  const [data, setData] = useState();

  useEffect(() => {
    csv(file).then((result) => {
      setData(result);
    });
  }, []);

  return {
    data
  };
};

export default useQuery;
