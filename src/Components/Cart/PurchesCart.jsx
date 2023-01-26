import React from 'react';
import SmalCartStyle from '../../Styles/Purches.module.css';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserAllStateData } from '../../Context/UseContextProvider';

const PurchesCart = ({
  img,
  title,
  price,
  IncrementTotalPrice,
  quantity,
  id,
  incressPrice,
  DecrementTotalPrice,
  CartDelete,
}) => {
  const { increment, discrement } = UserAllStateData();

  const priceIncrement = (id) => {
    IncrementTotalPrice(Math.floor(price));
    increment(id);
  };

  const priceDecremment = (id) => {
    discrement(id);
    DecrementTotalPrice(Math.floor(price), quantity);
  };
  return (
    <>
      <div className="productCart border-bottom mb-2 pt-1">
        <div className="row mt-2">
          <div className="col-4">
            <div
              className={`${SmalCartStyle.CartImageContent} position-relative`}
            >
              <div className="cart-img d-flex  gap-3 align-items-center">
                <img src={img} alt="cart-img" />
                <div className={SmalCartStyle.shortTitle}>
                  <h6 className="mb-1">{title}</h6>
                  <p className="mb-1">Color : Brown</p>
                  <p>Size : XL</p>
                </div>
              </div>
              <Link
                onClick={() => CartDelete(id)}
                className={`${SmalCartStyle.CloseIcon}`}
              >
                <MdCancel></MdCancel>
              </Link>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <div className={SmalCartStyle.CurrentPrice}>
              <p>
                $<span>{price}</span>
              </p>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <div className={`${SmalCartStyle.UpdateQuantity}`}>
              <div
                className="d-flex justify-content-center align-items-center "
                style={{
                  width: '100px',
                }}
              >
                <button onClick={() => priceDecremment(id)}>-</button>
                <input readOnly value={quantity} type="text"></input>
                <button onClick={() => priceIncrement(id)}>+</button>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <div className={SmalCartStyle.TotapPrice}>
              <p>
                $<span>{incressPrice}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchesCart;
