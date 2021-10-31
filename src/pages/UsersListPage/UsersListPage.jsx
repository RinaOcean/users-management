import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllUsers } from '../../redux/users';
import { getUsers } from '../../redux/users';

import UsersList from '../../components/UsersList/UsersList';
import UsersListItem from '../../components/UsersListItem/UsersListItem';

import css from './UsersListPage.module.css'

export default function UsersListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);


  return (
    <UsersList>
      <UsersListItem />
    </UsersList>
  )

};