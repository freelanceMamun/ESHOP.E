import React, { useEffect, useState } from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import ProdcutIteemFilter from '../Components/productItemFilter/productItemfilter';
import ShopList from '../Components/Shoplist';
import Pagination from '../Components/paginations/Paginations';
import Loader from '../Components/Loader';
import shopStyle from '../Styles/Shop.module.css';

import { HiViewGrid } from 'react-icons/hi';

import { FaList } from 'react-icons/fa';
const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProdcuts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prostPerPage] = useState(6);
  const lastPostIndex = currentPage * prostPerPage;
  const fristPostIndex = lastPostIndex - prostPerPage;
  const currentPost = products.slice(fristPostIndex, lastPostIndex);

  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const data = await fetch(
          'https://api.escuelajs.co/api/v1/products?offset=10&limit=50'
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

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <CurrentPageStatus></CurrentPageStatus>
      <div className="container">
        <div className="row mt-5 mb-5">
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
                <div className="col-lg-3 col-md-6 col-12">
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
                <div className="col-lg-3 col-md-6 col-12">
                  <div className={`${shopStyle.viewGrid}`}>
                    <label>
                      View:
                      <HiViewGrid className="ms-2 fs-5"></HiViewGrid>
                      <FaList className="ms-2"></FaList>
                    </label>
                    <input className="ms-2" type="text"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <ProdcutIteemFilter></ProdcutIteemFilter>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <div className="">
              {currentPost &&
                currentPost.map((cart) => {
                  return (
                    <ShopList
                      key={cart.id}
                      img={cart.images[0]}
                      updatePrice={cart.price}
                      title={cart.title}
                      dis={cart.description}
                      id={cart.id}
                      v
                    ></ShopList>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="">
          <Pagination
            postPerPage={prostPerPage}
            currentPage={currentPage}
            totaLPost={products.length}
            PaginationFun={PaginationFun}
            setIsLoading={setIsLoading}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default Products;
