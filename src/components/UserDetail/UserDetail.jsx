import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers, removeUser } from '../../redux/users';
import css from './UsersListItem.module.css';

export default function UserDetail() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const onDelete = id => dispatch(removeUser(id));
  const onEdit = id => dispatch(editUser(id))
  return (
    <>
      {users.map(({ id, first_name, last_name, birth_date, gender, job, biography, is_active }) => {
        const enabled = String(is_active)
        return (
          <li key={id} className="UsersListItem">
            <p className="UsersListItemInfo">First name: {first_name}</p>
            <p className="UsersListItemInfo">Last name: {last_name}</p>
            <p className="UsersListItemInfo">Date of Birth: {birth_date}</p>
            <p className="UsersListItemInfo">Gender: {gender}</p>
            <p className="UsersListItemInfo">Job: {job}</p>
            <p className="UsersListItemInfo">Biography: {biography}</p>
            <p className="UsersListItemInfo">Enabled: {enabled}</p>
            <button type="button" onClick={() => onEdit(id)}>Edit</button>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
        );
      })
      }
    </>
  );
};

UsersListItemFull.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      birth_date: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
      is_active: PropTypes.string.isRequired,
    }),
  ),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

