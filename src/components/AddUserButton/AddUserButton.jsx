import { useHistory } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import css from './AddUserButton.module.css';

export default function UsersButton () {
  let history = useHistory();
  const handleClick = ()=>{
   const path='/create/';
   history.push(path)
  }

  return(
    <button type="button" className={css.addButton} onClick={handleClick}><AddIcon/></button>
  )
};
