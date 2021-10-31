import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUsers, removeUser } from '../../redux/users';
import './UsersListItem.module.css';

export default function UsersListItem() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const onDelete = id => dispatch(removeUser(id));
  let history = useHistory();
  const handleClick = id => {
    let path = `/details/${id}`;
    history.push(path)

  }

  return (
    <>
      {
        users.map(({ id, first_name, last_name, birth_date, gender }) => {

          return (
            <li key={id} className="UsersListItem" onClick={() => handleClick(id)}>
              <p className="UsersListItemInfo">First name: {first_name}</p>
              <p className="UsersListItemInfo">Last name: {last_name}</p>
              <p className="UsersListItemInfo">Date of Birth: {birth_date}</p>
              <p className="UsersListItemInfo">Gender: {gender}</p>
              <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </li>
          );
        })
      }
    </>
  );
};

// UsersListItemCommon.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       first_name: PropTypes.string.isRequired,
//       last_name: PropTypes.string.isRequired,
//       birth_date: PropTypes.string.isRequired,
//       gender: PropTypes.string.isRequired,
//     }),
//   ),
//   onDelete: PropTypes.func,
// };



