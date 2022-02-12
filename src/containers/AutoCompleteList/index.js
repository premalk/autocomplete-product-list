import { useState } from 'react';
import styled from 'styled-components';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import Products from '../../components/Products';

import useQuery from '../../hooks/useQuery';
import useTable from '../../hooks/useTable';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const AutoCompleteList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery();
  const { slice, range } = useTable(data, page);

  const [, setSearchContent] = useState('');

  const searchCallback = (value) => {
    setSearchContent(value);
  };

  return (
    <Container>
      <Search searchCallback={searchCallback} />
      {!isLoading ? <Products data={data} /> : null}
      {!isLoading ? <Pagination range={range} slice={slice} setPage={setPage} page={page} /> : null}
    </Container>
  );
};

export default AutoCompleteList;
