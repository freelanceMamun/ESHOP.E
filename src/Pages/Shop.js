import React, { useState, useEffect } from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import shopStyle from '../Styles/Shop.module.css';

import ShopCart from '../Components/Cart/Shop';
import { FaList } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import OtherComimg from '../Asset/image/image 1174.png';

import Loader from '../Components/Loader';
import { motion } from 'framer-motion';
import Paginations from '../Components/paginations/Paginations';

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [grid, setGrid] = useState(true);
  const [products, setProdcuts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prostPerPage] = useState(25);
  const lastPostIndex = currentPage * prostPerPage;
  const fristPostIndex = lastPostIndex - prostPerPage;
  const currentPost = products.slice(fristPostIndex, lastPostIndex);

  const showIem = () => {
    setGrid(true);
  };
  ///  pagination call function

  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const data = await fetch(
          'https://api.escuelajs.co/api/v1/products'
        ).then((data) => data.json());
        setProdcuts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => {
      getStoreProducts();
    };
  }, [setProdcuts]);

  const PaginationFun = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <CurrentPageStatus></CurrentPageStatus>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="container">
          <div className={`${shopStyle.ShopComponent} mt-5`}>
            <div className="row">
              <div className="col-lg-5">
                <div className={shopStyle.ShopTitleH}>
                  <h5 className="mb-2">Ecommerce Acceories & Fashion item</h5>
                  <p>About {products?.length} results (0.62 seconds)</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={shopStyle.ShortComponent}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      <div className={`${shopStyle.pages} `}>
                        <label htmlFor="page">Per Pages:</label>
                        <input
                          className="ms-2"
                          type="text"
                          id="page
                       "
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className={shopStyle.Sort}>
                        <label htmlFor="">Sort By:</label>
                        <select className="ms-2">
                          <option defaultValue="Best Match" value="Best Match">
                            Best Match
                          </option>
                          <option value="Log">Low</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12">
                      <div className={`${shopStyle.viewGrid}`}>
                        <label>
                          View:
                          <HiViewGrid
                            onClick={showIem}
                            className="ms-2 fs-5"
                          ></HiViewGrid>
                          <FaList className="ms-2"></FaList>
                        </label>
                        <input className="ms-2" type="text"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductALlCart mt-5 pt-5">
            {grid && (
              <div className="row">
                {currentPost &&
                  currentPost.map((item) => {
                    return (
                      <motion.div
                        animate={{
                          scale: 1,
                        }}
                        initial={{
                          scale: 0.8,
                        }}
                        key={item.id}
                        className="col-lg-3 col-md-4  col-sm-6 col-12 mb-3"
                      >
                        <ShopCart
                          img={item.images[0]}
                          title={item.title}
                          updatePrice={item.price}
                          prevPrice={item.price}
                          id={item.id}
                        ></ShopCart>
                      </motion.div>
                    );
                  })}
              </div>
            )}
            <div className="">
              <Paginations
                postPerPage={prostPerPage}
                currentPage={currentPage}
                totaLPost={products.length}
                PaginationFun={PaginationFun}
                setIsLoading={setIsLoading}
              ></Paginations>
            </div>
          </div>

          <div className="text-center mt-5 pt-5">
            <img
              src={OtherComimg}
              style={{
                width: '90%',
              }}
              className="m-auto"
              alt=""
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
