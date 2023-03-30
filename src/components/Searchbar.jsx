import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Searchbar({ showName, handleSearchShow }) {
  return (
    <Card bg="primary" text="light" style={{ height: '8vh' }}>
      <input
        type="search"
        placeholder="Search a show ..."
        aria-label="Search"
        className="p-3"
        value={showName}
        onChange={handleSearchShow}
      />
    </Card>
  );
}

Searchbar.propTypes = {
  showName: PropTypes.string,
  handleSearchShow: PropTypes.func,
}.isRequired;

export default Searchbar;
