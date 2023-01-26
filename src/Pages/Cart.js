import React, { useState } from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import PurchesCart from '../Components/Cart/PurchesCart';
import { MdCheckCircle } from 'react-icons/md';
import Loader from '../Components/Loader';
import { UserAllStateData } from '../Context/UseContextProvider';
import NotFoundImg from '../Asset/image/SVG/undraw_online_groceries_a02y.svg';

const colors = {
  color: '#151875',
};

const Cart = () => {
  const { isLoading, setIsLoading, shopingCart } = UserAllStateData();

  const [totalPrice, setTotalPrice] = useState(
    shopingCart.map((data) => data.priceIncress).reduce((a, b) => a + b, 0)
  );

  const IncrementTotalPrice = (price, id) => {
    setTotalPrice((prev) => (prev = prev + price));
  };

  const DecrementTotalPrice = (price, quantity) => {
    if (quantity === 1) {
      return false;
    }
    setTotalPrice((prev) => (prev = prev - price));
  };

  const CartDelete = (id) => {
    let Filter = shopingCart.filter((cart) => cart.id !== id);
    localStorage.setItem('Card', JSON.stringify(Filter));
    setIsLoading(true);
    setTotalPrice(
      Filter.map((data) => data.priceIncress).reduce((a, b) => a + b, 0)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="">
      <CurrentPageStatus></CurrentPageStatus>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="container">
          <div className="row mt-5 mb-5 pt-5">
            <div className="col-lg-8">
              <div className="product-header ms-2 row">
                <h5 className="col-4 fs-4" style={colors}>
                  Product
                </h5>
                <h5 className="col-2 fs-4" style={colors}>
                  Price
                </h5>
                <h5 className="col-3 fs-4" style={colors}>
                  Quantity
                </h5>
                <h5 className="col-3 fs-4" style={colors}>
                  Total
                </h5>
              </div>
              <div className="product_items mt-3">
                {shopingCart &&
                  shopingCart.map((cart, index) => {
                    return (
                      <PurchesCart
                        img={cart.img}
                        title={cart.title}
                        key={cart.id}
                        price={cart.price}
                        incressPrice={cart.priceIncress}
                        IncrementTotalPrice={IncrementTotalPrice}
                        quantity={cart.quantity}
                        id={cart.id}
                        DecrementTotalPrice={DecrementTotalPrice}
                        CartDelete={CartDelete}
                      ></PurchesCart>
                    );
                  })}

                <>
                  {totalPrice === 0 ? (
                    <div className="d-flex flex-column  mb-5 pb-5 mt-5 pt-5">
                      <img
                        className="m-auto"
                        style={{
                          maxWidth: '300px',
                          height: '300px',
                        }}
                        src={NotFoundImg}
                        alt="not-found"
                      ></img>
                      <h5 className="text-center pt-2">product not Chosen</h5>
                    </div>
                  ) : null}
                </>
              </div>
              <div className="CartButton mt-4 d-flex justify-content-between ">
                <button>Update Curt</button>
                <button>Clear Curt</button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-center">
                <h5 className="fs-4" style={colors}>
                  Cart Totals
                </h5>
              </div>
              <div className="CheckOutContainer mt-4 mb-4">
                <div className="subTotals d-flex mt-2 mb-3 justify-content-between ">
                  <p>Subtotals:</p>
                  <p>${totalPrice}</p>
                </div>
                <div className="Totals d-flex mb-2 mt-3 justify-content-between ">
                  <p>Total:</p>
                  <p>${totalPrice}</p>
                </div>
                <p className="ShipingCheck">
                  <MdCheckCircle
                    className="me-1"
                    color="#19d16f"
                  ></MdCheckCircle>
                  Shipping & taxes calculated at checkout
                </p>
                <div className="chekoutBtn">
                  <button>Proceed To Checkout</button>
                </div>
              </div>
              <div className="CalculateShoping">
                <h5 className="fs-5 text-center" style={colors}>
                  Calculate Shopping
                </h5>
                <div className="CheckOutContainer mt-4 mb-4">
                  <div className="ShipingText mt-2 mb-2">
                    <input placeholder="State" type="text"></input>
                  </div>
                  <div className="ShipingText mt-2 mb-2">
                    <input placeholder="City" type="text"></input>
                  </div>
                  <div className="ShipingText mt-2 mb-2">
                    <input type="text" placeholder="Post Code"></input>
                  </div>
                  <div className="chekoutBtn">
                    <button>Calculate Shiping</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
