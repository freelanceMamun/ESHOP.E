import React from 'react';
import { MdOutlineRemoveRedEye, MdOutlineBarChart } from 'react-icons/md';
import { BiHeart } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
const ProductCart = ({ title, imgsrc, price }) => {
  return (
    <motion.div
      layout
      animate={{
        opacity: 1,
        scale: 1,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="col-lg-3 col-md-6 col-sm-6 col-12"
    >
      <div className="single-product p-2">
        <div
          className="product-img d-flex align-items-center justify-content-center"
          style={{
            height: '235px',
            backgroundColor: '#f6f7fb',
          }}
        >
          <a
            href="/
        "
          >
            <motion.img
              whileHover={{
                scale: 1.2,
              }}
              src={imgsrc}
              id="default"
              className="default-img"
              alt=""
            ></motion.img>
          </a>
          <div className="button-head">
            <div className="product-action">
              <a className="ms-2" href="/">
                <FiShoppingCart className="fs-5 me-1"></FiShoppingCart>
                Add to cart
              </a>
            </div>
            <div className="product-action-2">
              <a href="/" data-taget="#exampleModel" title="Quick view">
                <MdOutlineRemoveRedEye className="fs-5"></MdOutlineRemoveRedEye>
                <span>Quick Shop</span>
              </a>
              <a
                href="/"
                data-taget=""
                className="addItemCard"
                id="addItem"
                title="Wishlist"
              >
                <BiHeart className="fs-5"></BiHeart>
                <span>Add to Wishlist</span>
              </a>
              <a href="/" title="Compare">
                <MdOutlineBarChart className="fs-5"></MdOutlineBarChart>
                <span>Add to Compare</span>
              </a>
            </div>
          </div>
        </div>
        <div className="product-content p-2 text-center">
          <h3>
            <a href="/" id="titles">
              {title.slice(0, 25)}
            </a>
          </h3>
          <div className={`ColorBar d-flex gap-1 justify-content-center m-2`}>
            <span className=""></span>
            <span></span>
            <span></span>
          </div>
          <div className="product-price mb-1">
            <span className="">
              $<span id="Curprice">{price}.00</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCart;
