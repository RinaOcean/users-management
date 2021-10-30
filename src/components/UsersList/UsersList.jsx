import PropTypes from 'prop-types';
import './UsersList.scss';

const UsersList = ({ children, onAdd }) => (
  <>
    <button type="button" onClick={onAdd}>Add</button>
    <ul className="UsersList">{children}</ul>
  </>
);

UsersList.propTypes = {
  children: PropTypes.node,
  onAdd: PropTypes.func,
};

export default UsersList;