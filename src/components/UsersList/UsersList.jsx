import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';

import AddButton from '../../components/AddUserButton'
import { fetchAllUsers } from '../../redux/users';
import css from './UsersList.module.css';

export default function UsersList ({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);


  return(
    <div className={css.usersListWrapper}>
      <AddButton/>
      <ul className={css.usersList}>{children}</ul>
    </div>
    )
};


