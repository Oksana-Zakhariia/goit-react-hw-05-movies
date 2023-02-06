import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchBar } from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  const handleSubmit = query => {
    console.log(query);
    setSearchParams({ query });
  };

  return <SearchBar onSubmit={handleSubmit}></SearchBar>;
};
// Movies.propTypes = { onSubmit: PropTypes.func.isRequired };
