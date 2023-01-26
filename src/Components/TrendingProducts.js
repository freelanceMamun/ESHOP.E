import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import ProductCart from './Cart/ProductCart';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../Styles/TrendProd.module.css';
import Loader from '../Components/Loader';

const color = {
  backgroundColor: '#7e33e0',
  color: '#f1f1f1',
};

const list = [
  "men's clothing",
  'WOMAN',
  "women's clothing",
  'electronics',
  'New Arrival',
  'jewelery',
];

const TrendingProducts = () => {
  const [products, setProdcuts] = useState([]);
  let [filterData, setFilterData] = useState(products);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products').then(
          (data) => data.json()
        );
        setLoading(false);
        setProdcuts(data);
        setFilterData(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getStoreProducts();
  }, []);

  const TargetBtn = (index, item) => {
    const Filter = products.filter((cart) => cart.category === item);
    setActive(index);
    setFilterData(Filter);
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`${style.TrendingProducts} mt-5 mb-5`}
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
      }}
    >
      <div className="text-center">
        <h3 className={`${style.title}`}>Trending Item</h3>
      </div>
      <div
        className={`${style.listname} mt-4 mb-4 d-flex justify-content-center align-items-centers`}
      >
        <ul className={`d-flex gap-2 ${style.ListItem}`}>
          {list &&
            list.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => TargetBtn(index, item)}
                    key={index}
                    style={active === index ? color : null}
                    title={item}
                  ></Button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="mt-4">
        <motion.div layout className="row">
          <AnimatePresence>
            {filterData &&
              filterData.map((cart) => {
                return (
                  <ProductCart
                    key={cart.id}
                    imgsrc={cart.image}
                    title={cart.title}
                    price={cart.price}
                  ></ProductCart>
                );
              })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TrendingProducts;
