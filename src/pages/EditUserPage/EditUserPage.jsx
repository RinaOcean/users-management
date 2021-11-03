import {  useSelector } from 'react-redux';

import UserEditForm from '../../components/UserEditForm';
import { getCurrUser } from '../../redux/users';

export default function EditUserPage(){
  const user = useSelector(getCurrUser);
  
  return(
    <UserEditForm user={user}/>
  )
}
