import React, { useEffect } from 'react';
import { MainRouter } from './routers/MainRouter';
import './UsersApp.module.css';
import { useDispatch } from 'react-redux';
import { getUsersAsync } from './redux/actions/usersAction';

function UsersApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
    return () => {};
  }, []);
  return <MainRouter />;
}

export default UsersApp;