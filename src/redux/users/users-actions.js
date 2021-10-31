import { createAction } from "@reduxjs/toolkit";

export const fetchAllUsersRequest = createAction('users/fetchAllUsersRequest');
export const fetchAllUsersSuccess = createAction('users/fetchAllUsersSuccess');
export const fetchAllUsersError = createAction('users/fetchAllUsersError');

export const fetchUserRequest = createAction('users/fetchUserRequest');
export const fetchUserSuccess = createAction('users/fetchUserSuccess');
export const fetchUserError = createAction('users/fetchUserError');

export const addUserRequest = createAction('users/addUserRequest');
export const addUserSuccess = createAction('users/addUserSuccess');
export const addUserError = createAction('users/addUserError');

export const removeUserRequest = createAction('users/removeUserRequest');
export const removeUserSuccess = createAction('users/removeUserSuccess');
export const removeUserError = createAction('users/removeUserError');

export const editUserRequest = createAction('users/removeUserRequest');
export const editUserSuccess = createAction('users/removeUserSuccess');
export const editUserError = createAction('users/removeUserError');

// export const addFilter = createAction('users/addFilter')