export const SearchBar = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        autoComplete="off"
        value={value}
        placeholder="Enter the film name"
        type="text"
        onChange={e => onChange(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
