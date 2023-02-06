import { useState } from 'react';

import { toast } from 'react-toastify';
export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleInput = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Write search parameters', { theme: 'colored' });
      return;
    }
    onSubmit(query);
    form.reset();
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
