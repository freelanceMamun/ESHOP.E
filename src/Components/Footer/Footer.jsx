import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Footer.css';
import { MdFacebook } from 'react-icons/md';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
const Footer = () => {
  return (
    <section className="Footer_container  pt-5">
      <div className="container mt-3 pb-4">
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div className="Footer_Content">
              <h3 className="logo_title mb-3">EShop.</h3>
              <form action="" className="pt-4 mb-2">
                <div className="inputFild">
                  <input type="text" placeholder="Enter Email Address" />
                  <button>Sign Up</button>
                </div>
              </form>
              <div className="pt-2">
                <p>Contact ifo</p>
                <p>
                  17 Princess Road, London, Greater London <br /> NW1 8JR, UK
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="Footer_Content">
              <h3 className="mb-3">Catagories</h3>
              <ul className="pt-2">
                <li>
                  <Link>Laptop & Computers</Link>
                </li>
                <li>
                  <Link>Cameras & Photography</Link>
                </li>
                <li>
                  <Link>Smart Phone & Tablets</Link>
                </li>
                <li>
                  <Link>Video Games & Consoles</Link>
                </li>
                <li>
                  <Link>Waterproof Headphones</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-8">
            <div className="Footer_Content">
              <h3 className="mb-3">Customer Care</h3>
              <ul className="pt-2">
                <li>
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>Discount</Link>
                </li>
                <li>
                  <Link>Returns</Link>
                </li>
                <li>
                  <Link>Order History</Link>
                </li>
                <li>
                  <Link>Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="Footer_Content">
              <h3 className="mb-3">Pages</h3>
              <ul className="pt-2">
                <li>
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>Discount</Link>
                </li>
                <li>
                  <Link>Returns</Link>
                </li>
                <li>
                  <Link>Order History</Link>
                </li>
                <li>
                  <Link>Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="CopyRight_section">
        <div className="container pt-3 pb-3">
          <div className="d-flex align-items-center">
            <div className="copy_writing">
              <p>©Eshop. -All Rights Reserved</p>
            </div>
            <div className=" mx-auto ">
              <ul className="d-flex gap-2">
                <li>
                  <Link>
                    <MdFacebook className="fs-5"></MdFacebook>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FiInstagram className="fs-5"></FiInstagram>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FiTwitter className="fs-5"></FiTwitter>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
