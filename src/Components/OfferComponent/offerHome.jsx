import React from 'react';
import Button from '../Button';
import Shape from '../../Asset/image/Ellipse 63.svg';
import Sofa from '../../Asset/image/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.svg';

const style = {
  left: '155px',
  width: '72%',
  top: '5px',
};
const offerHome = () => {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-6 col-md-6 h-100">
          <div className="w-100 h-100 position-relative">
            <img src={Shape} className="ShapeSvg w-100 h-100" alt="" />
            <img
              src={Sofa}
              alt=""
              className="position-absolute Sofa_Img"
              style={style}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="OfferContent">
            <h4 className="mb-3">
              Unique Features Of leatest & Trending Poducts
            </h4>
            <div className="OfferDis pt-3 mb-3">
              <p className="d-flex align-items-center gap-3 mb-3">
                <span className="d-block"></span>
                All frames constructed with hardwood solids and laminates
              </p>
              <p className="d-flex align-items-center gap-3 mb-3">
                <span className="d-block "></span>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
              <p className="d-flex align-items-center gap-3 mb-3">
                <span className="d-block"></span>
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
            <div className="pt-3 d-flex gap-3">
              <Button title={'Add To Cart'}></Button>
              <p className="price">
                B&B Italian Sofa <br /> $32.00{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default offerHome;
