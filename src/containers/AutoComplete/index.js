import { useState } from 'react';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import Products from '../../components/Products';
import AdditionalImages from '../../components/AdditionalImages';

import useTable from '../../hooks/useTable';
import useQuery from '../../hooks/useQuery';

import { imageArray } from '../../utils';

const AutoCompleteList = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imagelist, setImagelist] = useState([]);

  const { data } = useQuery();
  const { slice, range } = useTable(products, page);

  const filterSearch = (value) => {
    if (!value) setProducts([]);
    else {
      const filteredList = data.filter((obj) => {
        return obj.title.indexOf(value) !== -1;
      });
      setProducts([...filteredList]);
    }
  };

  const callback = (value) => {
    filterSearch(value);
  };

  const handleClick = (images) => {
    setIsOpen(true);
    setImagelist(imageArray(images));
  };

  return (
    <div className="container">
      <AdditionalImages isOpen={isOpen} setIsOpen={setIsOpen} imagelist={imagelist} />
      <Search callback={callback} />
      {slice.length ? (
        <>
          <Products data={slice} handleClick={handleClick} />
          <Pagination range={range} slice={slice} setPage={setPage} page={page} />
        </>
      ) : null}
    </div>
  );
};

export default AutoCompleteList;
