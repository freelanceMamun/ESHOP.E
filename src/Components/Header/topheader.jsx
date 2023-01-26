import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Styles/navbar.module.css';
import {
  MdMarkEmailRead,
  MdPhone,
  MdExpandMore,
  MdPersonOutline,
} from 'react-icons/md';
import { BiHeart } from 'react-icons/bi';

import { FiShoppingCart } from 'react-icons/fi';

import { UserAllStateData } from '../../Context/UseContextProvider';
import { toast } from 'react-toastify';

const topheader = () => {
  const { handleShow, pageCurrent, setIsLoading, users, Logout, AlartMessage } =
    UserAllStateData();

  const OnCart = () => {
    if (!users) {
      pageCurrent('Login');
    } else {
      pageCurrent('Cart');
    }
    AlartMessage();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };
  const OnRegister = () => {
    pageCurrent('Register');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };
  const LogOutFun = () => {
    Logout();
    pageCurrent('Login');
    toast.success('Logout successfully');
  };

  return (
    <div className={`${style.topbar} container`}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div
            className={`d-flex align-items-center gap-3 ${style.letftContent}`}
          >
            <div className="d-flex align-items-center ">
              <MdMarkEmailRead></MdMarkEmailRead>
              <p className="ms-2">Eshops@gmail.com</p>
            </div>
            <div className="d-flex align-items-center">
              <MdPhone></MdPhone>
              <p className="ms-2"> (12346)67890 </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className={style.rightContent}>
            <ul className="d-flex justify-content-end gap-3">
              <li className="me-2">
                <Link className="nav-link">
                  English
                  <MdExpandMore className="fs-4"></MdExpandMore>
                </Link>
              </li>
              <li className="me-2 custom-dropdown">
                <Link className="nav-link ">
                  USD
                  <MdExpandMore className="fs-4"></MdExpandMore>
                </Link>
                <ul className="">
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      EURO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      BDT
                    </Link>
                  </li>
                </ul>
              </li>
              {users ? (
                <>
                  <li className="me-2 custom-dropdown">
                    <Link className="nav-link">
                      Logout
                      <MdPersonOutline className="fs-5 ms-1"></MdPersonOutline>
                    </Link>
                    <ul className="">
                      <li className="nav-item">
                        <Link to="" className="nav-link">
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={'/login'}
                          className="nav-link"
                          onClick={LogOutFun}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="me-2 custom-dropdown">
                    <Link className="nav-link">
                      Login
                      <MdPersonOutline className="fs-5 ms-1"></MdPersonOutline>
                    </Link>
                    <ul className="">
                      <li className="nav-item">
                        <Link
                          to="/register"
                          className="nav-link"
                          onClick={OnRegister}
                        >
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/login"
                          className="nav-link"
                          onClick={() => pageCurrent('Login')}
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="me-2">
                <Link className="nav-link" onClick={handleShow}>
                  Whishlist
                  <BiHeart className="fs-5 ms-1"></BiHeart>
                </Link>
              </li>
              <li className="me-2">
                <Link to={'/cart'} onClick={OnCart} className="nav-link">
                  <FiShoppingCart className="fs-5"></FiShoppingCart>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topheader;
