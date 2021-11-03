import { useHistory } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import AddButton from '../../components/AddUserButton'
import css from './UsersList.module.css';

export default function UsersList ({ children }) {
  // let history = useHistory();
  // const handleClick = ()=>{
  //  const path='/create/';
  //  history.push(path)
  // }

  return(
    <div className={css.usersListWrapper}>
      <AddButton/>
      <ul className={css.usersList}>{children}</ul>
    </div>
    )
};


