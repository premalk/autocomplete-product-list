import { useState, useEffect } from 'react';

import { calculateRange, sliceData } from '../utils';

const useTable = (data, page) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data);
    setTableRange([...range]);

    const slice = sliceData(data, page);
    setSlice([...slice]);
  }, [data, page, setTableRange, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
