import React from 'react';
import Image from '../../Asset/image/big-content2.jpg';
import style from '../../Styles/navbar.module.css';
import { motion } from 'framer-motion';

const BannerSlider = () => {
  return (
    <div className="bannerContent">
      <div
        className={`${style.bannerImage} row`}
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div
          className={`col-lg-6 col-md-6 col-sm-6 ms-auto mt-auto mb-auto ${style.BannderContentSection}`}
        >
          <div className={`${style.title}`}>
            <h4>
              Make your <br></br> Site stunning with <br /> large title
            </h4>
          </div>
          <div className={`${style.description} mb-4 `}>
            <p>
              Hipster style is a fashion trending for Gentleman and Lady with
              tattoos. You’ll become so cool and attractive with your’s girl.
              Now let come hare and grab it now !
            </p>
          </div>
          <div className="">
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              title={'Shop Now'}
              className={`${style.shopBtn}`}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
