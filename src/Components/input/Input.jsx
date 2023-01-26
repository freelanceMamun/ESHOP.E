import React from 'react';

const Input = ({ type, pleaseholder, ...rest }) => {
  return <input type={type} placeholder={pleaseholder} {...rest}></input>;
};

export default Input;
