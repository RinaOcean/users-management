import UsersForm from './components/UsersForm/UsersForm';
import UsersListPage from './pages/UsersListPage/UsersListPage';
import UserDetailPage from './pages/UserDetailsPage'
import './App.css';
import { Route, Switch } from 'react-router';
import { useEffect } from 'react';
import { fetchAllUsers } from './redux/users';
import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();
  
  // useEffect(() => {
    
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);
  return (
    <Switch>
      <Route path="/" component={UsersListPage} exact />
      <Route path="/create" component={UsersForm} />
      <Route path="/details/:id" component={UserDetailPage} />
      {/* <UsersForm />
      <UsersListPage /> */}
    </Switch>
  );
}

export default App;
