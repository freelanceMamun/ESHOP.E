import React from 'react';
import style from '../../Styles/Cart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsZoomIn } from 'react-icons/bs';
import { UserAllStateData } from '../../Context/UseContextProvider';
import { toast } from 'react-toastify';
const Shop = ({ img, title, updatePrice, prevPrice, id }) => {
  const { addToCart, shopingCart, addWishList, wishlistCart } =
    UserAllStateData();
  const addProductCart = (image, price, titleCart, id) => {
    if (shopingCart.find((x) => x.id === id)) {
      toast.warning("You've chosen", {
        position: 'bottom-right',
      });
      return;
    } else {
      addToCart(image, price, titleCart, id);
      toast.success('product has been purchased', {
        position: 'top-left',
      });
    }
  };

  const AddWislistListSetProduct = (image, price, titleCart, id) => {
    if (wishlistCart.find((x) => x.id === id)) {
      toast.warning("You've chosen", {
        position: 'top-left',
      });
      return false;
    } else {
      addWishList(image, price, titleCart, id);
      toast.success('Add wishlist Saved', {
        position: 'top-center',
      });
    }
  };

  return (
    <div
      className={`${style.productCart} position-relative d-flex m-auto`}
      style={{
        maxWidth: '270px',
        overflow: 'hidden',
      }}
    >
      <img src={img} className="m-auto" alt="..." />
      <div
        className={`position-absolute  ms-2 d-flex gap-2 flex-column ${style.iconCart}`}
      >
        <span
          className="shadow-sm"
          onClick={() => addProductCart(img, updatePrice, title, id)}
        >
          <FiShoppingCart className="fs-5"></FiShoppingCart>
        </span>
        <span className="shadow-sm">
          <HiOutlineHeart
            onClick={() =>
              AddWislistListSetProduct(img, updatePrice, title, id)
            }
            className="fs-5"
          ></HiOutlineHeart>
        </span>
        <span className="shadow-sm">
          <BsZoomIn></BsZoomIn>
        </span>
      </div>
      <div className={`${style.bodyCard}  text-center`}>
        <h5
          style={{
            fontSize: '18px',
            color: '#151875',
            fontWeight: '600',
          }}
          className={`${style.title} m-2 text-center`}
        >
          {title}
        </h5>
        <div
          className={`${style.ColorBar} d-flex gap-1 justify-content-center m-2`}
        >
          <span
            className="rounded-circle"
            style={{
              width: '10px',
              height: '10px',
            }}
          ></span>
          <span
            className="rounded-circle"
            style={{
              width: '10px',
              height: '10px',
            }}
          ></span>
          <span
            className="rounded-circle"
            style={{
              width: '10px',
              height: '10px',
            }}
          ></span>
        </div>
        <p
          style={{
            fontWeight: '400',
          }}
          className={`${style.price} mb-2 `}
        >
          ${updatePrice}.00
          <span
            className="ms-2"
            style={{
              color: '#FB2E86',
              textDecoration: 'line-through',
            }}
          >
            ${prevPrice}.00
          </span>
        </p>
      </div>
    </div>
  );
};

export default Shop;
