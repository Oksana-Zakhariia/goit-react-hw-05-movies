import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleInput = event => {
    setQuery(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Write search parameters');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        value={query}
        placeholder="Enter the film name"
        type="text"
        onChange={handleInput}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };
