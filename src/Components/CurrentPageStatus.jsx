import React from 'react';
import { Link } from 'react-router-dom';
import { UserAllStateData } from '../Context/UseContextProvider';
import { MdOutlineEast } from 'react-icons/md';

const CurrentPageStatus = () => {
  const { pages } = UserAllStateData();

  return (
    <div className={`Current_page`}>
      <div className="container">
        <div className={`page pt-4 pb-4 d-flex gap-3 align-items-center `}>
          <Link to="/">Home</Link>
          <MdOutlineEast></MdOutlineEast>
          <Link>{pages}</Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentPageStatus;
