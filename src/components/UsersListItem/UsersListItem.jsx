import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchAllUsers, getUsers, removeUser } from '../../redux/users';
import { nanoid } from 'nanoid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import css from'./UsersListItem.module.css';

export default function UsersListItem() {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const onDelete = id => dispatch(removeUser(id));
  
  let history = useHistory();
  
  const handleClick = id => {
    let path = `/details/${id}`;
    dispatch(fetchAllUsers())
    history.push(path)

  }

  return (
    <>
      {
        users.map(({ id, first_name, last_name, birth_date, gender }) => {

          return (
            <li key={nanoid()} className={css.usersListItem} onClick={() => handleClick(id)}>
              <div className={css.usersInfoWrapper}>
              <p className="UsersListItemInfo">{first_name} {last_name}</p>
              <p className="UsersListItemInfo"></p>
              <p className="UsersListItemInfo">{birth_date}</p>
              <p className="UsersListItemInfo">{gender}</p>
              </div>
              <button type="button" className={css.deleteUserButton} onClick={() => onDelete(id)}><HighlightOffIcon/></button>
            </li>
          );
        })
      }
    </>
  );
};
