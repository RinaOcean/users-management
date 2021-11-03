import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUsers, removeUser, editUser, fetchAllUsers } from '../../redux/users';
import AddUserButton from '../AddUserButton';
import css from './UserDetail.module.css';

export default function UserDetail({user}) {
  const dispatch = useDispatch();
 
  let history = useHistory()

  const onEdit = (id) => {
   const path = `/edit/${id}`
   history.push(path)
  }

  const onDelete = id => dispatch(removeUser(id));
  

  const { id, first_name, last_name, birth_date, gender, job, biography, is_active } = user
  const enabled = String(is_active)
 
  return (
    <div className="UsersListItem">
      <AddUserButton/>
      <p className="UsersListItemInfo">First name: {first_name}</p>
      <p className="UsersListItemInfo">Last name: {last_name}</p>
      <p className="UsersListItemInfo">Date of Birth: {birth_date}</p>
      <p className="UsersListItemInfo">Gender: {gender}</p>
      <p className="UsersListItemInfo">Job: {job}</p>
      <p className="UsersListItemInfo">Biography: {biography}</p>
      <p className="UsersListItemInfo">Enabled: {enabled}</p>
      <button type="button" onClick={() => onEdit(id)}>Edit</button>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </div>
   
  );
};

// UsersListItemFull.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       first_name: PropTypes.string.isRequired,
//       last_name: PropTypes.string.isRequired,
//       birth_date: PropTypes.string.isRequired,
//       gender: PropTypes.string.isRequired,
//       job: PropTypes.string.isRequired,
//       biography: PropTypes.string.isRequired,
//       is_active: PropTypes.string.isRequired,
//     }),
//   ),
//   onEdit: PropTypes.func,
//   onDelete: PropTypes.func,
// };


