import axios from 'axios';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  addUserRequest,
  fetchAllUsersRequest,
  fetchAllUsersSuccess,
  fetchAllUsersError,
  addUserSuccess,
  addUserError,
  removeUserRequest,
  removeUserSuccess,
  removeUserError,
  editUserRequest,
  editUserSuccess,
  editUserError,
} from './users-actions';

export const fetchAllUsers = () => async dispatch => {
  dispatch(fetchAllUsersRequest);

  try {
    const { data } = await axios.get('https://frontend-candidate.dev.sdh.com.ua/v1/contact/');
    dispatch(fetchAllUsersSuccess(data));
  } catch (error) {
    dispatch(fetchAllUsersError(error.message));
  }

};

export const fetchUser = (userId) => async dispatch => {
  dispatch(fetchUserRequest);

  try {
    const { data } = await axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/:${userId}/`);
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }

};

export const addUser = ({ first_name, last_name, birth_date, gender, job, biography, is_active }) => dispatch => {
  const user = {
    first_name,
    last_name,
    birth_date,
    gender,
    job,
    biography,
    is_active,
  };

  dispatch(addUserRequest());

  axios
    .post('https://frontend-candidate.dev.sdh.com.ua/v1/contact/', user)
    .then(({ data }) => {
      dispatch(addUserSuccess(data));
      console.log('User was successfully added');
    })
    .catch(error => {
      dispatch(addUserError(error.message));
      console.log('Something went wrong. Please, retry');
    });
};

export const removeUser = (userId) => dispatch => {
  dispatch(removeUserRequest());

  axios
    .delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${userId}/`)
    .then(() => {
      dispatch(removeUserSuccess(userId));
      console.log('User was successfully removed');
    })
    .catch(error => {
      dispatch(removeUserError(error.message));
      console.log('Something went wrong. Please, retry');
    })
}

export const editUser = (userId) => dispatch => {
  dispatch(editUserRequest());

  axios
    .put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/:${userId}/`)
    .then(() => {
      dispatch(editUserSuccess(userId));
      console.log('User was successfully edited');
    })
    .catch(error => {
      dispatch(editUserError(error.message));
      console.log('Something went wrong. Please, retry');
    })
}