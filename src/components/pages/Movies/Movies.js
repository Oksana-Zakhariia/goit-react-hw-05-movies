import { useState } from 'react';

import { toast } from 'react-toastify';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const [name, setName] = useState('');
  const handleName = name => {
    setName(name);
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (name.trim() === '') {
      toast.error('Write search parameters', { theme: 'colored' });
      return;
    }
    form.reset();
  };

  return <SearchBar onSubmit={handleSubmit} onChange={handleName}></SearchBar>;
};
// Movies.propTypes = { onSubmit: PropTypes.func.isRequired };
