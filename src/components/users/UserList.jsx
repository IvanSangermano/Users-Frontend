import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const UserList = ({ users }) => {
  return users.map((us) => (
    <User key={us._id} user={us} />
  ));
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
