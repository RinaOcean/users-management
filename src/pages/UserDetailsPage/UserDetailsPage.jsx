import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../redux/users";

import UsersList from "../../components/UsersList/UsersList";
import UserDetail from "../../components/UserDetail/UserDetail";

export default function UserDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch]);


  return (
    <UsersList>
      <UserDetail />
    </UsersList>
  )
};