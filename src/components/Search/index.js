import { func } from 'prop-types';

const Search = ({ callback }) => {
  const onChange = (e) => {
    callback(e.target.value);
  };

  return (
    <input
      data-testid="filter-search"
      className="styled-input"
      type="text"
      placeholder="Search"
      id="search"
      onChange={onChange}
    />
  );
};

Search.propTypes = {
  callback: func
};

export default Search;
