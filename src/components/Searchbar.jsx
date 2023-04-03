import PropTypes from 'prop-types';

function Searchbar({ showName, handleSearchShow }) {
  return (
    <input
      type="search"
      placeholder="Search a show ..."
      aria-label="Search"
      className="p-3"
      style={{
        height: '8vh',
        borderRadius: '2rem',
        border: '1px solid #4369b2',
        width: '100%',
      }}
      value={showName}
      onChange={handleSearchShow}
    />
  );
}

Searchbar.propTypes = {
  showName: PropTypes.string,
  handleSearchShow: PropTypes.func,
}.isRequired;

export default Searchbar;
