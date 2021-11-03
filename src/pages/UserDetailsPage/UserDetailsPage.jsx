import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, fetchUser, getCurrUser } from "../../redux/users";

import UsersList from "../../components/UsersList/UsersList";
import UserDetail from "../../components/UserDetail/UserDetail";
import { useHistory } from "react-router-dom";

export default function UserDetailPage() {
  const history = useHistory();
  const currPath = history.location.pathname;
  const userId = history.location.pathname.slice(9, currPath.length);
const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(fetchUser(userId))
 },[dispatch, userId]);

 useEffect(() => {
  dispatch(fetchAllUsers());
}, [dispatch]);

const user = useSelector(getCurrUser)

  return (
    <UserDetail user={user}/>
    
  )
};