import styled from 'styled-components';

import Search from '../../components/Search';
import Products from '../../components/Products';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const AutoCompleteList = () => {
  return (
    <Container>
      <Search />
      <Products />
    </Container>
  );
};

export default AutoCompleteList;
