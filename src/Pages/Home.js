import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import style from '../Styles/navbar.module.css';
import BannerSlider from '../Components/Slider/bannerSlider';
import GridCart from '../Components/gridCart/GridCart';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GridCartData } from '../Utils/Data';
import FeaturedProduct from '../Components/FeaturedProduct';
import TrandingProduct from '../Components/TrendingProducts';
import Services from '../Components/Services/Services';
import HomeBlog from '../Components/Blog/homeBlog';
import OfferHome from '../Components/OfferComponent/offerHome';
import OtherComimg from '../Asset/image/image 1174.png';
import { UserAllStateData } from '../Context/UseContextProvider';

const Home = () => {
  const { products } = UserAllStateData();
  return (
    <>
      <div className={`${style.BannerContent}`}>
        <div className="container">
          <Swiper
            slidesPerView={1}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={800}
            modules={[Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <BannerSlider></BannerSlider>
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlider></BannerSlider>
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlider></BannerSlider>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {GridCartData.map((cart) => {
            return (
              <GridCart
                key={cart.id}
                imgSrc={cart.image}
                title={cart.title}
                des={cart.collection}
              ></GridCart>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="FeauredTitle">
          <h4 className="text-center m-5">Featured Products</h4>
          <div className="mt-4">
            <FeaturedProduct products={products} />
          </div>
        </div>
      </div>
      <div className="container">
        <TrandingProduct></TrandingProduct>
      </div>
      <Services></Services>
      <div className="mt-5 mb-5 pt-5 ">
        <div
          className=" OfferContainer p-5"
          style={{
            backgroundColor: '#F1F0FF',
            height: '530px',
          }}
        >
          <OfferHome></OfferHome>
        </div>
      </div>
      <div className="container">
        <div className="text-center  pt-5">
          <img
            src={OtherComimg}
            style={{
              width: '100%',
            }}
            className="m-auto"
            alt=""
          ></img>
        </div>
        <HomeBlog></HomeBlog>
      </div>
    </>
  );
};

export default Home;
