export const Filter = ({ onFiltered }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
      type="text"
      name="filter"
      onChange={evt => onFiltered(evt.target.value)}
    />
    </div>
  );
};
