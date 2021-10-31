import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllUsers } from '../../redux/users';
import { getUsers } from '../../redux/users';

import UsersList from '../../components/UsersList/UsersList';
import UsersListItemFull from '../../components/UsersListItemFull/UsersListItemFull';

import css from './UsersListPage.module.css'

export default function UsersListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector(getUsers)
  console.log(users);
  return (
    <UsersList>
      <UsersListItemFull />
    </UsersList>
  )

}