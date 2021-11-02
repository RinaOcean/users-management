// import { combineReducers } from "redux";
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  // fetchUserRequest,
  fetchUserSuccess,
  // fetchUserError,
  // addUserRequest,
  // fetchAllUsersRequest,
  fetchAllUsersSuccess,
  // fetchAllUsersError,
  addUserSuccess,
  // addUserError,
  // removeUserRequest,
  removeUserSuccess,
  editUserSuccess,
  // removeUserError,
} from './users-actions';

const items = createReducer([], {
  [fetchAllUsersSuccess]: (_, { payload }) => payload,
  [fetchUserSuccess]: (_, { payload }) => payload,
  [addUserSuccess]: (state, { payload }) => [...state, payload],
  [removeUserSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
  [editUserSuccess]: (state, { payload }) => [...state, payload],

});

const user = createReducer([], {
  
  [fetchUserSuccess]: (_, { payload }) => payload,
 

});


export default combineReducers({items, user});