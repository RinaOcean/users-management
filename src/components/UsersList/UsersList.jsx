import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import css from './UsersList.module.css';

export default function UsersList ({ children }) {
  let history = useHistory();
  const handleClick = ()=>{
   const path='/create/';
   history.push(path)
  }

  return(
    <>
      <button type="button" onClick={handleClick}>Add</button>
      <ul className="usersList">{children}</ul>
    </>
    )
};

UsersList.propTypes = {
  children: PropTypes.node,
  onAdd: PropTypes.func,
};

