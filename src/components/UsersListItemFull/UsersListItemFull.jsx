import PropTypes from 'prop-types';
import './UsersListItem.scss';

const UsersListItemFull = ({ onDelete, onEdit, users }) => (
  <>
    {users.map(({ id, firstName, lastName, dateOfBirth, sex, job, biography, is_active }) => {
      return (
        <li key={id} className="UsersListItem">
          <p className="UsersListItemInfo">First name:</p> {firstName}
          <p className="UsersListItemInfo">Last name:</p> {lastName}
          <p className="UsersListItemInfo">Date of Birth:</p> {dateOfBirth}
          <p className="UsersListItemInfo">Sex:</p> {sex}
          <p className="UsersListItemInfo">Job:</p> {job}
          <p className="UsersListItemInfo">Biography:</p> {biography}
          <p className="UsersListItemInfo">Enabled :</p> {is_active}
          <button type="button" onClick={() => onEdit(id)}>Edit</button>
          <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
      );
    })}
  </>
);

UsersListItemFull.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
      is_active: PropTypes.bool.isRequired,
    }),
  ),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UsersListItemFull;