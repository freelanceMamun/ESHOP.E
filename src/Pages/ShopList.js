import React, { useEffect, useState } from 'react';
import ShopListItem from '../Components/Shoplist';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import Loader from '../Components/Loader';
import OtherComimg from '../Asset/image/image 1174.png';
import Paginations from '../Components/paginations/Paginations';
const ShopList = () => {
  const [loading, setIsLoading] = useState(true);
  const [product, setProdcuts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [prostPerPage] = useState(25);
  const lastPostIndex = currentPage * prostPerPage;
  const fristPostIndex = lastPostIndex - prostPerPage;
  const currentPost = product.slice(fristPostIndex, lastPostIndex);

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
  }, []);

  const PaginationFun = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <CurrentPageStatus></CurrentPageStatus>
      <div className="container">
        {currentPost &&
          currentPost.map((cart) => {
            return (
              <ShopListItem
                key={cart.id}
                img={cart.images[0]}
                updatePrice={cart.price}
                title={cart.title}
                dis={cart.description}
                id={cart.id}
              ></ShopListItem>
            );
          })}
        <div className="PaginationFun">
          <Paginations
            postPerPage={prostPerPage}
            currentPage={currentPage}
            totaLPost={product.length}
            PaginationFun={PaginationFun}
            setIsLoading={setIsLoading}
          ></Paginations>
        </div>
      </div>
      <div className="container">
        <div className="text-center  pt-5">
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
    </div>
  );
};

export default ShopList;
