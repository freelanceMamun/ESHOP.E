import React from 'react';
import ProductDetails from '../Components/products/ProductDetails';
import CurrentPageStatus from '../Components/CurrentPageStatus';

import OtherComimg from '../Asset/image/image 1174.png';
import FeaturedProduct from '../Components/FeaturedProduct';

const ShopDetailes = () => {
  return (
    <div>
      <CurrentPageStatus></CurrentPageStatus>
      <ProductDetails />
      <div className="container">
        <div className="mt-4 pt-4 pb-5 ">
          <h3 className="mb-5">Related Products</h3>
          <FeaturedProduct />
        </div>

        <div className="text-center pt-5">
          <img
            src={OtherComimg}
            style={{
              width: '90%',
            }}
            className="m-auto"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailes;
