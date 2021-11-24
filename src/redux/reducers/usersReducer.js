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
  import { UPDATE, DELETE, CREATE, NONE } from '../types/modalTypes';

  const initialState = {
    list: [],
    error: '',
    isLoading: false,
    actionInProgress: NONE,
    selectedUser: null,
  };
  
  export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_CREATE_USER:
        return {
          ...state,
          error: '',
          list: [...state.list, action.payload],
          isLoading: false,
          actionInProgress: NONE,
          selectedUser: null,
        };
      case USER_UPDATE_USER:
        return {
          ...state,
          error: '',
          list: state.list.map((user) =>
            user._id === action.payload._id ? action.payload : user),
          isLoading: false,
          actionInProgress: NONE,
          selectedUser: null,
        };
      case USER_DELETE_USER:
        return {
          ...state,
          error: '',
          list: state.list.filter((user) => user._id !== action.payload),
          isLoading: false,
          actionInProgress: NONE,
          selectedUser: null,
        };
      case USER_SET_ALL_USERS:
        return { ...state, list: action.payload, error: '', isLoading: false };
      case USER_SET_ERROR:
        return {
          ...state,
          error: action.payload || 'An error ocurred',
          isLoading: false,
        };
      case USER_SET_LOADING_TRUE:
        return {
          ...state,
          isLoading: true,
        };
      case USER_SET_CREATE_ACTION:
        return {
          ...state,
          actionInProgress: CREATE,
        };
      case USER_SET_UPDATE_ACTION:
        return {
          ...state,
          actionInProgress: UPDATE,
          selectedUser: { ...action.payload },
        };
      case USER_SET_DELETE_ACTION:
        return {
          ...state,
          actionInProgress: DELETE,
          selectedUser: { ...action.payload },
        };
      case USER_UNSET_ACTION:
        return {
          ...state,
          actionInProgress: NONE,
          selectedUser: null,
          error: '',
        };
      default:
        return state;
    }
  };
  