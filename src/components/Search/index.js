import { func } from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 70%;
  padding: 1.5em;
  margin: 1.5em;
  border: none;
  border-radius: 3px;
`;

const Search = ({ searchCallback }) => {
  const onChange = (e) => {
    searchCallback(e.target.value);
  };

  return <Input type="text" placeholder="Search" onChange={onChange} />;
};

Search.propTypes = {
  searchCallback: func
};

export default Search;
