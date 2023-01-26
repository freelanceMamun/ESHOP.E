import React from 'react';
import HomeBlogcart from '../Cart/HomeBlogcart';
import SVGIcon1 from '../../Asset/image/Vector.svg';
import SVGIcon2 from '../../Asset/image/Vector (1).svg';
import Carimg1 from '../../Asset/image/Blog/Frame 3 (1).png';
import Carimg2 from '../../Asset/image/Blog/Frame 3.png';
import Carimg3 from '../../Asset/image/Blog/Frame 4.png';

const CartData = [
  {
    id: 1,
    img: Carimg1,
    disc: `More off this less hello samlande lied much
     over tightly circa horse taped mightlys`,
    title: 'Top esssential Trends in 2021',
  },
  {
    id: 2,
    img: Carimg2,
    disc: `More off this less hello samlande lied much
     over tightly circa horse taped mightlys`,
    title: 'Top esssential Trends in 2021',
  },
  {
    id: 3,
    img: Carimg3,
    disc: `More off this less hello samlande lied much
     over tightly circa horse taped mightlys`,
    title: 'Top esssential Trends in 2021',
  },
];

const HomeBlog = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="text-center pt-5">
        <h3 className="Blog_title">Leatest Blog</h3>
      </div>
      <div className="row mt-5">
        {CartData.map((item) => {
          return (
            <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-3">
              <HomeBlogcart
                imageSrc={item.img}
                icon1={SVGIcon1}
                icon2={SVGIcon2}
              ></HomeBlogcart>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBlog;
