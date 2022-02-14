import { useState } from 'react';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import Products from '../../components/Products';

import useTable from '../../hooks/useTable';
import useQuery from '../../hooks/useQuery';

const AutoCompleteList = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const { data } = useQuery();
  const { slice, range } = useTable(products, page);

  const filterSearch = (value) => {
    if (!value) setProducts([]);
    else {
      const refinedData = data.filter((obj) => {
        return obj.title.indexOf(value) !== -1;
      });
      setProducts([...refinedData]);
    }
  };

  const callback = (value) => {
    filterSearch(value);
  };

  return (
    <div className="container">
      <Search callback={callback} />
      {slice.length ? (
        <>
          <Products data={slice} />
          <Pagination range={range} slice={slice} setPage={setPage} page={page} />
        </>
      ) : null}
    </div>
  );
};

export default AutoCompleteList;
