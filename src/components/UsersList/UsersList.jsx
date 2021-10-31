import PropTypes from 'prop-types';
import css from './UsersList.module.css';

const UsersList = ({ children, onAdd }) => (
  <>
    <button type="button" onClick={onAdd}>Add</button>
    <ul className="usersList">{children}</ul>
  </>
);

UsersList.propTypes = {
  children: PropTypes.node,
  onAdd: PropTypes.func,
};

export default UsersList;