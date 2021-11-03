import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {  fetchAllUsers, removeUser } from '../../redux/users';
import AddUserButton from '../AddUserButton';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import css from './UserDetail.module.css';

export default function UserDetail({user}) {
  const dispatch = useDispatch();
 
  let history = useHistory();

  const onEdit = (id) => {
   const path = `/edit/${id}`;
   history.push(path);
  }

  // const onDelete = id => dispatch(removeUser(id));
  const onDelete = (id) => {
    dispatch(removeUser(id));
    dispatch(fetchAllUsers());
    const path = `/`;
    history.push(path);
  }

  const { id, first_name, last_name, birth_date, gender, job, biography, is_active } = user
  const enabled = String(is_active)
 
  return (
    <div>
      <AddUserButton/>
      <div className={css.UserCard}>
        <div>
          <p className={css.UserInfo}>First name: <span>{first_name}</span> </p>
          <p className={css.UserInfo}>Last name: <span>{last_name}</span></p>
          <p className={css.UserInfo}>Birthdate: <span>{birth_date}</span></p>
          <p className={css.UserInfo}>Gender: <span>{gender}</span></p>
          <p className={css.UserInfo}>Job: <span>{job}</span></p>
          <p className={css.UserInfo}>Biography: <span>{biography}</span></p>
          <p className={css.UserInfo}>Enabled: <span>{enabled}</span></p>
          <div className={css.buttonsWrapper}>
            <button className={css.edit} type="button" onClick={() => onEdit(id)}><EditIcon/></button>
            <button className={css.delete}  type="button" onClick={() => onDelete(id)}><HighlightOffIcon/></button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

