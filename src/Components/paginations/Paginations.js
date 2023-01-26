import React from 'react';
const Paginations = ({
  PaginationFun,
  totaLPost,
  currentPage,
  postPerPage,
  setIsLoading,
}) => {
  const pageNumber = [];
  for (let index = 1; index <= Math.ceil(totaLPost / postPerPage); index++) {
    pageNumber.push(index);
  }

  const OnClickPagecurrent = (num) => {
    PaginationFun(num);
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="mt-5 mb-5">
      <div className="allButton">
        {pageNumber.map((num, index) => {
          return (
            <button
              onClick={() => OnClickPagecurrent(num)}
              key={index}
              className={
                num === currentPage ? 'pageButton active' : 'pageButton'
              }
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Paginations;
