import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import bigimg from '../../Asset/image/p9.jpg';
import Smllimg from '../../Asset/image/p13.jpg';
const starNum = [1, 2, 3, 4, 5];
const check = ['one', 'Two', 'three', 'Four'];
const Size = ['S', 'M', 'L', 'XL', 'XXL'];

const chebarStyle = {
  opacity: 1,
  visibility: 'visible',
};

const SizeColor = {
  backgroundColor: '#19d16f',
};
const ProductDetails = () => {
  const [count] = useState(1);
  const [active, setActive] = useState(0);
  const [Activesize, setSize] = useState(0);

  const TargetBtn = (item, index) => {
    setActive(index);
    toast.success('Selected color 🤗', {
      position: 'top-right',
    });
  };

  const TargetSize = (size, ind) => {
    setSize(ind);
    toast.success('Selected size 🤗', {
      position: 'top-right',
    });
  };

  return (
    <div className="Shop-Single mt-5 pb-4" id="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row bg-white shadow p-4">
              <div className="col-lg-6">
                <div className="product-gallery-2">
                  <div className="Slider-for">
                    <div className="row">
                      <div className="col-4">
                        <div
                          className="SmllImg d-flex flex-column gap-2"
                          style={{
                            height: '178px',
                            width: '100%',
                          }}
                        >
                          <img
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                            src={Smllimg}
                            alt=""
                          />
                          <img
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                            src={Smllimg}
                            alt=""
                          />
                          <img
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                            src={Smllimg}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="imgFull ">
                          <img
                            style={{
                              maxWidth: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                            src={bigimg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-docs">
                  {/* Short */}
                  <div className="short mb-3">
                    <h4 className="mt-2 mb-2">Nonstick Dishwasher PFOA</h4>
                    <div className="rating-main mb-2">
                      <ul className="ratting">
                        {starNum.map((count, index) => {
                          return (
                            <li key={index} className="d-inline">
                              <FaStar></FaStar>
                            </li>
                          );
                        })}
                      </ul>
                      <a href="/" className="total-review">
                        (120) Review
                      </a>
                    </div>
                    <div className="Ssg-price mb-2">
                      <p className="price">
                        <span className="discount">$70.00</span>
                        <s>$100.00</s>
                      </p>
                    </div>
                    <p className="descripton mb-4">
                      eget velit. Donec ac tempus ante. Fusce ultricies massa
                      massa. Fusce aliquam, purus eget sagittis vulputate,
                      sapien libero hendrerit est, sed commodo augue nisi non
                      neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed tempor, lorem et placerat vestibulum, metus nisi
                      posuere nisl, in
                    </p>
                  </div>
                  {/* Colors */}
                  <div className="mt-3 d-flex  gap-3 mb-3">
                    <div className="color">
                      <h4
                        style={{
                          color: '#151875',
                        }}
                        className="mb-2"
                      >
                        Available Options <br />
                        <span>Color</span>
                      </h4>
                      <ul className="d-flex gap-1">
                        {check.map((item, index) => {
                          return (
                            <li
                              className="me-1"
                              onClick={() => TargetBtn(item, index)}
                              key={index}
                            >
                              <Link className={item}>
                                <MdDone
                                  style={active === index ? chebarStyle : null}
                                  className=""
                                  color="#ffff"
                                ></MdDone>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* size  */}
                    <div className="Size-element me-auto ms-auto ">
                      <h4
                        className="h5"
                        style={{
                          color: '#151875',
                        }}
                      >
                        Size
                      </h4>
                      <ul className="size-Items d-flex mt-4 gap-1 ">
                        {Size.map((size, index) => {
                          return (
                            <li
                              style={Activesize === index ? SizeColor : null}
                              onClick={() => TargetSize(size, index)}
                              className="me-1"
                              key={index}
                            >
                              <Link className="item">{size}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="Product-cut mt-5 mb-4">
                    <div className="d-flex align-item-center gap-3">
                      <div className="Quantity d-flex gap-3 align-items-center">
                        <h6
                          className="h5"
                          style={{
                            color: '#151875',
                          }}
                        >
                          Quantity :{' '}
                        </h6>
                        <div
                          className="d-flex p-2 QuantityValue"
                          style={{ width: '200px' }}
                        >
                          <button className="" type="button">
                            <AiOutlinePlus></AiOutlinePlus>
                          </button>
                          <input
                            type="text"
                            value={count}
                            onChange={() => {}}
                            className="text-center"
                          />
                          <button className="" type="button">
                            <AiOutlineLine></AiOutlineLine>
                          </button>
                        </div>
                      </div>

                      <div className="add-to-cart d-inline-block">
                        <div className="Add-cart_btn d-inline-block">
                          <Link to={'/checkout'} className="btn">
                            Add to Cart
                          </Link>
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        color: '#151875',
                      }}
                      className="cat mt-2"
                    >
                      Category :<a href="/"> Clothing </a>
                    </p>
                    <p
                      style={{
                        color: '#151875',
                      }}
                      className="Availability mt-2"
                    >
                      Availability : 180 Products In Stock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
