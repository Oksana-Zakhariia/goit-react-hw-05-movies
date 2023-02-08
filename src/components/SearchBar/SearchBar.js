import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Input, Button } from './SearchBar.styled';

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
      <Input
        autoComplete="off"
        value={query}
        placeholder="Enter the film name"
        type="text"
        onChange={handleInput}
      ></Input>
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };
