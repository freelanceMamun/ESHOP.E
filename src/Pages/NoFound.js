import React from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import NotFoundImg from '../Asset/image/SVG/pageNotFound.svg';
import OtherComimg from '../Asset/image/image 1174.png';
const NoFound = () => {
  return (
    <>
      <CurrentPageStatus></CurrentPageStatus>
      <div className="container">
        <div className="row mt-5 pt-4 align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                className="NotFoundImg"
                src={NotFoundImg}
                alt="Not-found"
              ></img>
              <h4
                className="mt-3 NotFound-Title"
                style={{
                  color: '#151875',
                  fontSize: '24px',
                  lineHeight: '28px',
                }}
              >
                oops! The page you requested was not found!
              </h4>
            </div>
          </div>
        </div>
        <div className="text-center  pt-5">
          <img
            src={OtherComimg}
            style={{
              width: '90%',
            }}
            className="mt-3"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default NoFound;
