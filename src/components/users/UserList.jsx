import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const UserList = ({ users }) => {
  return users.map((user) => (
    <User key={user._id} user={user} />
  ));
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
