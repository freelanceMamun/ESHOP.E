import React from 'react';
import { Link } from 'react-router-dom';
const GridCart = ({ imgSrc, title, des }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <div className="singleBanner position-relative">
        <img src={imgSrc} alt="SingleCart" />
        <div className="contentCart position-absolute ">
          <p className="mb-2">{des}</p>
          <h4 className="mb-2">{title}</h4>
          <Link className="">Discover Now</Link>
        </div>
      </div>
    </div>
  );
};

export default GridCart;
