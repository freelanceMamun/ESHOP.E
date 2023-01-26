import React from 'react';
import { BiCheck, BiSearchAlt2 } from 'react-icons/bi';
import { MdStar } from 'react-icons/md';

const ProductItemfilter = () => {
  return (
    <div className="ItemFilter">
      <div className="Brand mt-3 mb-4">
        <h4>Products Brand</h4>
        <div className="itemInner">
          <ul>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Coaster Furniture</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Fusion Dot High Fashion</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Dream Furnitture Flipping</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Young Repurposed</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Green DIY furniture</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="catagories mt-3 mb-4">
        <h4>Categories</h4>
        <div className="itemInner">
          <ul>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Clothes</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Furniture</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Electronics</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Shoes</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>Others</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="priceFilter mt-3 mb-4">
        <h4>Price Filter</h4>
        <div className="itemInner">
          <ul>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>$0.00 - $150.00</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>$150.00 - $350.00</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>$150.00 - $504.00</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>$450.00 +</span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>$150.00 - $1000.00</span>
            </li>
          </ul>
        </div>
        <div className="filterPrice mt-3 mb-3">
          <input
            type="text"
            className="inputPrice"
            placeholder="$150.00 - $350.00"
          ></input>
          <BiSearchAlt2 className="fs-4" color="#bcbddb"></BiSearchAlt2>
        </div>
      </div>
      <div className="Ratting mt-3 mb-4">
        <h4>Rating Item</h4>
        <div className="itemInner">
          <ul>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <span className="ms-1">(3012)</span>
              </span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <span className="ms-1">(2012)</span>
              </span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <span className="ms-1">(1512)</span>
              </span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <span className="ms-1">(1112)</span>
              </span>
            </li>
            <li className="item d-flex align-items-center">
              <span className="checkbox">
                <BiCheck></BiCheck>
              </span>
              <span>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#FFC107"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <MdStar className="fs-5" color="#B2B2B2"></MdStar>
                <span className="ms-1">(502)</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="Color mt-3 mb-4">
        <h4>Filter Color</h4>
        <div className="colorInner mt-3 mb-3">
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Blue</span>
          </p>
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Orange</span>
          </p>
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Brown</span>
          </p>
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Green</span>
          </p>
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Pink</span>
          </p>
          <p className="pColors gap-1 d-flex align-items-center">
            <span></span>
            <span className="">Purple</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemfilter;
