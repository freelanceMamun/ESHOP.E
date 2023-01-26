import React from 'react';
import { Link } from 'react-router-dom';
const HomeBlogcart = ({ imageSrc, icon1, icon2 }) => {
  return (
    <div className="H_blogCart rounded-3">
      <div className="Blog_cartContent p-2">
        <div className="Cart_img">
          <img src={imageSrc} className="rounded-2" alt="" />
        </div>
        <div className="Cart_disc p-3">
          <div className="d-flex gap-3 mb-4 ">
            <p className="d-flex gap-2 align-items-center">
              <img
                src={icon2}
                alt=""
                style={{
                  width: '16px',
                }}
              />
              Surfauxion
            </p>
            <p className="d-flex  gap-2 align-items-center">
              <img
                style={{
                  width: '16px',
                }}
                src={icon1}
                alt=""
              />
              21 August,2020
            </p>
          </div>
          <div className="discriptions">
            <h5 className="mt-2 mb-3">Top esssential Trends in 2021</h5>
            <p className="mb-3">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link className="mb-2 d-blok">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogcart;
