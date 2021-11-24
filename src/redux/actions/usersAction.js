import axios from 'axios';
import {
    USER_CREATE_USER,
    USER_UPDATE_USER,
    USER_DELETE_USER,
    USER_SET_ALL_USERS,
    USER_SET_ERROR,
    USER_SET_LOADING_TRUE,
    USER_SET_CREATE_ACTION,
    USER_SET_UPDATE_ACTION,
    USER_SET_DELETE_ACTION,
    USER_UNSET_ACTION,
  } from '../types/usersType.js';

export const createUser = (user) => {
  return {
    type: USER_CREATE_USER,
    payload: user,
  };
};
export const updateUser = (user) => {
  return {
    type: USER_UPDATE_USER,
    payload: user,
  };
};
export const deleteUser = (userId) => {
  return {
    type: USER_DELETE_USER,
    payload: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: USER_SET_ALL_USERS,
    payload: users,
  };
};
export const setError = (error) => {
  return {
    type: USER_SET_ERROR,
    payload: error,
  };
};
export const setLoadingTrue = () => {
  return {
    type: USER_SET_LOADING_TRUE,
  };
};
export const setCreateAction = () => {
  return {
    type: USER_SET_CREATE_ACTION,
  };
};
export const setDeleteAction = (user) => {
  return {
    type: USER_SET_DELETE_ACTION,
    payload: user,
  };
};
export const setUpdateAction = (user) => {
  return {
    type: USER_SET_UPDATE_ACTION,
    payload: user,
  };
};
export const unsetAction = () => {
  return {
    type: USER_UNSET_ACTION,
  };
};
export const getUsersAsync = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.get(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users`
    );
    if (res.status === 200) {
      let users = [];
      for (let i = 0; i < res.data.length; i++) {
        users.push(res.data[i]);
      }
      dispatch(setUsers(users));
    }
  } catch (error) {
    dispatch(setError(error?.response?.data?.error));
  }
};
export const deleteUserAsync = (userId) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.delete(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users/${userId}`
    );
    if (res.status === 200) {
      dispatch(deleteUser(userId));
    }
  } catch (error) {
    dispatch(setError(error?.response?.data?.error));
  }
};
export const createUserAsync = (user) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users`,
      user
    );
    if (res.status === 201) {
      return dispatch(createUser(res.data.datos));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};
export const updateUserAsync = (user) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.put(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/users/${user._id}`,
      user
    );
    if (res.status === 200) {
      return dispatch(updateUser(res.data.datos));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.error));
  }
};
