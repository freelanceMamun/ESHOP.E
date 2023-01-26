import React from 'react';
import style from '../../Styles/Cart.module.css';
const SmallCart = ({ title, price, imgSrc }) => {
  return (
    <div className={`${style.productCart} d-flex `}>
      <img src={imgSrc} className="m-auto" alt="..." />
      <div className={`${style.bodyCard} text-center`}>
        <h5 className={`${style.title} m-2 text-center`}>{title}</h5>
        <div className={`${style.ColorBar} d-flex  justify-content-center m-2`}>
          <span className=""></span>
          <span></span>
          <span></span>
        </div>
        <h6 className={`${style.code} mb-2`}>Code - Y3236433 </h6>
        <p className={`${style.price} mb-2 `}>${`${price}.00`}</p>
      </div>
    </div>
  );
};

export default SmallCart;
