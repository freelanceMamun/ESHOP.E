import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAllStateData } from '../Context/UseContextProvider';
const PrivetRoutes = ({ children }) => {
  const { users } = UserAllStateData();
  return users ? children : <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;
