import React from 'react';
import Simg1 from '../../Asset/image/Group (1).png';
import Simg2 from '../../Asset/image/cashback 1.png';
import Simg3 from '../../Asset/image/premium-quality 1.png';
import Simg4 from '../../Asset/image/Group.png';
import { motion } from 'framer-motion';
const CartData = [
  {
    id: 1,
    imgSrc: Simg1,
  },
  {
    id: 2,
    imgSrc: Simg2,
  },
  {
    id: 3,
    imgSrc: Simg3,
  },
  {
    id: 4,
    imgSrc: Simg4,
  },
];

const Services = ({ text }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="">
        <h3 className="S_title text-center">
          {text ? text : 'What Shopex Offer!'}
        </h3>
      </div>
      <div className={`mt-5 mb-5`}>
        <div className="row">
          {CartData.map((item) => {
            return (
              <motion.div
                animate={{
                  y: 20,
                }}
                key={item.id}
                className="col-lg-3 col-md-6 col-12 mb-3"
              >
                <div className="text-center d-flex rounded-1  ServiceCart p-4">
                  <img src={item.imgSrc} alt="" />
                  <h4 className="m-2">24/7 Support</h4>
                  <p className="m-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
