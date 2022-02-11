import styled from 'styled-components';

const Input = styled.input`
  width: 70%;
  padding: 1.5em;
  margin: 1.5em;
  border: none;
  border-radius: 3px;
`;

const Search = () => {
  return <Input type="text" placeholder="Search" />;
};

export default Search;
