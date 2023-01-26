import React from 'react';
import { MdStar } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsZoomIn } from 'react-icons/bs';
import style from '../Styles/ShopList.module.css';
import { motion } from 'framer-motion';
import { UserAllStateData } from '../Context/UseContextProvider';
import { toast } from 'react-toastify';
const Shoplist = ({ title, oldprice, updatePrice, dis, star, img, id }) => {
  const { shopingCart, addToCart, addWishList, wishlistCart } =
    UserAllStateData();
  const currentList = localStorage.getItem('page');

  const addProductCart = (image, price, titleCart, id) => {
    if (shopingCart.find((x) => x.id === id)) {
      toast.warning("You've chosen", {
        position: 'bottom-right',
      });
      return;
    } else {
      addToCart(image, price, titleCart, id);
      toast.success('product has been purchased', {
        position: 'top-right',
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
        position: 'top-left',
      });
    }
  };
  return (
    <motion.div
      animate={{
        y: 0,
      }}
      initial={{
        y: 200,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`${style.ShoplistCart} mt-3 `}
    >
      <div className={`${style.ShopListContent}`}>
        <div
          className="row"
          style={{
            height: '100%',
          }}
        >
          <div
            className={`col-lg-4 ${
              currentList === 'Shop List' ? 'col-md-4 col-12' : ''
            } `}
            style={{ height: '100%' }}
          >
            <div className={`${style.Shop_Image} d-flex align-items-center`}>
              <motion.img
                src={img}
                alt="product"
                style={{
                  height: '100%',
                }}
              ></motion.img>
            </div>
          </div>
          <div
            className={`col-lg-8 ${
              currentList === 'Shop List' ? 'col-md-8 col-12' : ''
            }`}
          >
            <div className={`${style.ShopProductsInfo} pt-3 `}>
              <div className="TitleInfo d-flex align-items-center gap-4 ">
                <h4>{title}</h4>
                <div className={style.ColorHol}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={`${style.PriceReview} d-flex align-items-center gap-3  mb-2`}
              >
                <p>
                  ${updatePrice}.00
                  <span className="ms-2">${oldprice}.00</span>
                </p>
                <div className={style.Review}>
                  <span>
                    <MdStar></MdStar>
                  </span>
                  <span>
                    <MdStar></MdStar>
                  </span>
                  <span>
                    <MdStar></MdStar>
                  </span>
                  <span>
                    <MdStar></MdStar>
                  </span>
                  <span>
                    <MdStar></MdStar>
                  </span>
                </div>
              </div>
              <div className={style.ShotDiscription}>
                <p>{dis}</p>
              </div>
              <div className={`${style.CartButton} d-flex gap-2 mt-3 `}>
                <motion.span
                  whileTap={{
                    scale: '0.7',
                  }}
                  onClick={() => addProductCart(img, updatePrice, title, id)}
                >
                  <FiShoppingCart className="fs-5"></FiShoppingCart>
                </motion.span>
                <span
                  onClick={() =>
                    AddWislistListSetProduct(img, updatePrice, title, id)
                  }
                >
                  <HiOutlineHeart className="fs-5"></HiOutlineHeart>
                </span>
                <span>
                  <BsZoomIn className="fs-5"></BsZoomIn>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shoplist;
