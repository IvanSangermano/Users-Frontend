import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from './Login.module.css';

export const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 280,
    margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '50px 0' };
  return (
    <Grid>
      <nav className={styles.nav}>
        <h1>Users App</h1>
        <div className={styles.containerActions}>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </nav>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};
