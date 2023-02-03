import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const Movies = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const handleName = event => {
    setName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      toast.error('Write search parameters', { theme: 'colored' });
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        value={name}
        placeholder="Enter the film name"
        type="text"
        onChange={handleName}
      ></input>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </form>
  );
};
Movies.propTypes = { onSubmit: PropTypes.func.isRequired };
