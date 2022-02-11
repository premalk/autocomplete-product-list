import styled from 'styled-components';

import Search from '../../components/Search';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const AutoCompleteList = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default AutoCompleteList;
