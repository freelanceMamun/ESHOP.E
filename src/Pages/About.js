import React from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import Button from '../Components/Button';
import AboutImg from '../Asset/image/Rectangle 56.png';
import Services from '../Components/Services/Services';
import AboutStyle from '../Styles/About.module.css';
import { UserAllStateData } from '../Context/UseContextProvider';
import LoaderSpinner from '../Components/Loader';

const About = () => {
  const { isLoading } = UserAllStateData();
  return (
    <div className="">
      <CurrentPageStatus></CurrentPageStatus>
      {isLoading && isLoading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row mt-5 pt-5 pb-5">
              <div className=" col-xl-6  col-lg-6 col-md-12 col-12">
                <div
                  className={`${AboutStyle.AboutImage} mx-auto position-relative`}
                >
                  <div className={`${AboutStyle.ImageContent} shadow-1 `}>
                    <img className="" src={AboutImg} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="col-xl-6  col-lg-6 col-md-12 col-12">
                <div className={`${AboutStyle.AboutContent}`}>
                  <h3>
                    Welcome To <span>Eshop.</span>
                  </h3>
                  <h4 className="mt-2">
                    Know About Our Ecomerce Business History
                  </h4>
                  <p className="mt-3">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. sed
                    ut perspiciatis unde sunt in culpa qui officia deserunt
                    mollit anim id est laborum. sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem Excepteu
                  </p>
                  <p className="mt-3 mb-4">
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum. sed ut perspiciatis Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. sed ut perspi deserunt mollit
                    anim id est laborum. sed ut perspi.
                  </p>
                  <Button title={'Contact Us'}></Button>
                </div>
              </div>
            </div>
            <Services text="Our Features"></Services>
          </div>
          <div className="clientSay"></div>
        </>
      )}
    </div>
  );
};

export default About;
