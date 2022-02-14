import { func } from 'prop-types';

const Search = ({ callback }) => {
  const onChange = (e) => {
    callback(e.target.value);
  };

  return <input className="styled-input" type="text" placeholder="Search" onChange={onChange} />;
};

Search.propTypes = {
  callback: func
};

export default Search;
