import React from 'react';
import { UserAllStateData } from '../Context/UseContextProvider';
import { Navigate } from 'react-router-dom';
const AdminPrivet = ({ children }) => {
  const { users } = UserAllStateData();
  if (users.email === 'mamun@gmail.com') {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminPrivet;
