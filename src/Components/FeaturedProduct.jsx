import React from 'react';
import SmallCart from './Cart/SmallCart';

const FeaturedProduct = ({ products }) => {
  return (
    <div className="row">
      {products &&
        products
          .map((cartData) => {
            return (
              <div
                key={cartData.id}
                className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 pb-5"
              >
                <SmallCart
                  imgSrc={cartData.images[0]}
                  price={cartData.price}
                  title={cartData.title}
                ></SmallCart>
              </div>
            );
          })
          .slice(0, 4)}
    </div>
  );
};

export default FeaturedProduct;
