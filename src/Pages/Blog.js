import React from 'react';
import BlogCart from '../Components/Blog/BlogCart';
import CurrentPage from '../Components/CurrentPageStatus';

import { Link } from 'react-router-dom';
import { UserAllStateData } from '../Context/UseContextProvider';

import LoaderSpinner from '../Components/Loader';
import BlogFilter from '../Components/Blog/BlogFilter';
const Blog = () => {
  const { isLoading, setIsLoading } = UserAllStateData();
  const OnContact = (text) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <CurrentPage></CurrentPage>

      {isLoading && isLoading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-lg-7">
                <BlogCart
                  ReadMore={
                    <Link onClick={() => OnContact()} to={'/blog/fter'}>
                      Read more..
                    </Link>
                  }
                ></BlogCart>
              </div>
              <BlogFilter></BlogFilter>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
