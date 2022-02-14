import { useState } from 'react';
import styled from 'styled-components';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import Products from '../../components/Products';

import useTable from '../../hooks/useTable';
import useQuery from '../../hooks/useQuery';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

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

  const searchCallback = (value) => {
    filterSearch(value);
  };

  return (
    <Container>
      <Search searchCallback={searchCallback} />
      <Products data={slice} />
      <Pagination range={range} slice={slice} setPage={setPage} page={page} />
    </Container>
  );
};

export default AutoCompleteList;
