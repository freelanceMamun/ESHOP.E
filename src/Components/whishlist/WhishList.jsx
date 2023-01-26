import React, { useEffect, useState } from 'react';
import { BiX } from 'react-icons/bi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { UserAllStateData } from '../../Context/UseContextProvider';
import LoaderSpinner from '../Loader';
function Example() {
  let wishlistCart = JSON.parse(localStorage.getItem('wishlist') || '[]');
  const { show, handleClose } = UserAllStateData();
  const [isloading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = wishlistCart
      .map((data) => data.priceIncress)
      .reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [wishlistCart]);
  const removeWishlistCart = (id) => {
    let Filter = wishlistCart.filter((cart) => cart.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(Filter));
    setIsLoading(true);
    setTotalPrice(
      Filter.map((data) => data.priceIncress).reduce((a, b) => a + b, 0)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="shoping_item">
            <div className="drop_downCart_header">
              <div className="row">
                <span className="col-6 CountItem">
                  {wishlistCart.length} ITEMS
                </span>
                <Link className="col-6">VIEW CART</Link>
              </div>
            </div>
            <div className="shoping_list">
              {isloading ? (
                <>
                  <LoaderSpinner></LoaderSpinner>
                </>
              ) : (
                <>
                  {wishlistCart &&
                    wishlistCart.map((cartList) => {
                      return (
                        <div className="Item" key={cartList.id}>
                          <Link
                            onClick={() => removeWishlistCart(cartList.id)}
                            className="remove"
                            title="Remove"
                          >
                            <BiX className="fs-6"></BiX>
                          </Link>
                          <Link href="#" className="Cart_img">
                            <img src={cartList.img} alt="" />
                          </Link>
                          <h6 className="">
                            <Link href="#">{cartList.title}</Link>
                          </h6>
                          <p className="Qunatity">
                            {cartList.quantity} X{' '}
                            <span className="amount">
                              {' '}
                              ${cartList.price}.00
                            </span>
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            <div className="button_Check">
              <div className="total">
                <span>Total</span>
                <span className="Total_amount">${totalPrice}.00</span>
              </div>
              <Link className="btn animate">Checkout</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
