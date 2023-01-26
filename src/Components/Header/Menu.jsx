import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Styles/navbar.module.css';
import { MdExpandMore, MdOutlineSearch } from 'react-icons/md';
import { UserAllStateData } from '../../Context/UseContextProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  const { pageCurrent, setIsLoading } = UserAllStateData();

  const OnContact = (text) => {
    pageCurrent(text);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`container ${style.navBar}`}>
      <Navbar expand="lg" className="navbar navbar-expand-lg">
        <Container className="container-md gx-1">
          <Link
            to={'/'}
            className={` ${style.brandName} navbar-brand me-0 fs-2`}
          >
            EShop.
          </Link>
          <Navbar.Toggle
            className={`${style.ToggleBtn}`}
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse
            className="justify-content-between"
            id="basic-navbar-nav"
          >
            <Nav className="navbar-nav  ms-lg-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item custom-dropdown">
                <Link className="nav-link">
                  Page
                  <MdExpandMore className="fs-4"></MdExpandMore>
                </Link>

                <ul className="">
                  <li className="nav-item">
                    <Link
                      onClick={() => OnContact('About')}
                      to="/about"
                      className="nav-link"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/blog"
                      onClick={() => OnContact('Blog')}
                      className="nav-link"
                    >
                      blog
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      to="/faq"
                      onClick={() => OnContact('FAQ')}
                      className="nav-link"
                    >
                      FAQ
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link
                      to="*"
                      onClick={() => OnContact('Not Found')}
                      className="nav-link"
                    >
                      Not Found
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to={'/product'}
                  onClick={() => OnContact('Products')}
                  className="nav-link"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  onClick={() => OnContact('Blog')}
                  className="nav-link "
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item custom-dropdown">
                <Link
                  to={'/shop'}
                  onClick={() => OnContact('shop')}
                  className="nav-link "
                >
                  Shop
                  <MdExpandMore className="fs-4"></MdExpandMore>
                </Link>
                <ul>
                  <li className="nav-item">
                    <Link
                      onClick={() => OnContact('Shop List')}
                      to="/shopList"
                      className="nav-link"
                    >
                      Shop List
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to={'/contact'}
                  onClick={() => OnContact('Contact')}
                  className="nav-link "
                >
                  Contact
                </Link>
              </li>
            </Nav>
            <form className={` ${style.formGroup} d-flex `} role="search">
              <div className={`input-group round-1 ${style.InputGroup}`}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products Here....."
                />
                <span className="input-group-text rounded-1" id="basic-addon2">
                  <MdOutlineSearch></MdOutlineSearch>
                </span>
              </div>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
