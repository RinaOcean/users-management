import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import UserEditForm from '../../components/UserEditForm';
import { getCurrUser } from '../../redux/users';

export default function EditUserPage(){
  const history = useHistory();
  const currPath = history.location.pathname;
  const user = useSelector(getCurrUser);
  console.log(user.id);


  return(
    <UserEditForm user={user}/>
  )
}
