import UsersListPage from './pages/UsersListPage/UsersListPage';
import UserDetailPage from './pages/UserDetailsPage'
import CreateUserPage from './pages/CreateUserPage'
import EditUserPage from './pages/EditUserPage';
import Container  from './components/Container';
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
    <Container>
      <Switch>
        <Route path="/" component={UsersListPage} exact />
        <Route path="/create" component={CreateUserPage} />
        <Route path="/details/:id" component={UserDetailPage} />
        <Route path="/edit/:id" component={EditUserPage} />
      </Switch>
    </Container>
  );
}

export default App;
