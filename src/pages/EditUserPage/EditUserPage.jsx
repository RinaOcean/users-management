import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import UserEditForm from '../../components/UserEditForm';
import { getCurrUser } from '../../redux/users';

export default function EditUserPage(){
 

  
  const user = useSelector(getCurrUser);
  console.log(user.id);



  return(
    <UserEditForm user={user}/>
  )
}
