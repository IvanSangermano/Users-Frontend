import React, { useEffect } from 'react';
import { MainRouter } from './routers/MainRouter';
import './UsersApp.module.css';
import { useDispatch } from 'react-redux';

function UsersApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
    return () => {};
  }, []);
  return <MainRouter />;
}

export default UsersApp;