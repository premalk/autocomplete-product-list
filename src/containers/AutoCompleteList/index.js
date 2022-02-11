import styled from 'styled-components';

import Search from '../../components/Search';
import Products from '../../components/Products';

import useQuery from '../../hooks/useQuery';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const AutoCompleteList = () => {
  const { data, isLoading } = useQuery();
  return (
    <Container>
      <Search />
      {!isLoading ? <Products data={data} /> : null}
    </Container>
  );
};

export default AutoCompleteList;
