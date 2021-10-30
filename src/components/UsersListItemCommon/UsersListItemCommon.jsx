import PropTypes from 'prop-types';
import './UsersListItem.scss';

const UsersListItemCommon = ({ onDelete, users }) => (
  <>
    {users.map(({ id, firstName, lastName, dateOfBirth, sex }) => {
      return (
        <li key={id} className="UsersListItem">
          <p className="UsersListItemInfo">First name:</p> {firstName}
          <p className="UsersListItemInfo">Last name:</p> {lastName}
          <p className="UsersListItemInfo">Date of Birth:</p> {dateOfBirth}
          <p className="UsersListItemInfo">Sex:</p> {sex}
          <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
      );
    })}
  </>
);

UsersListItemCommon.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

export default UsersListItemCommon;