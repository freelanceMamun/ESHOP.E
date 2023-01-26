import React from 'react';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import OtherComimg from '../Asset/image/image 1174.png';
const FAQ = () => {
  return (
    <section>
      <CurrentPageStatus></CurrentPageStatus>
      <div className="FaqContainer container">
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="FaqContent">
                <h3 className="mb-5">Generel Information</h3>
                <div className="mt-4 pt-3">
                  <h4>Eu dictumst cum at sed euismood condimentum?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="mt-4 pt-3">
                  <h4>Magna bibendum est fermentum eros.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="mt-4 pt-3">
                  <h4>Odio muskana hak eris conseekin sceleton?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="mt-4 pt-3">
                  <h4>Elit id blandit sabara boi velit gua mara?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="FaqAsk ">
                <div className="">
                  <h3>Ask a Question</h3>
                </div>
                <form>
                  <div className="mt-2 mb-4">
                    <input type="text" placeholder="Your Name"></input>
                  </div>
                  <div className="mt-2 mb-4">
                    <input type="text" placeholder="Subject"></input>
                  </div>
                  <textarea
                    className="mb-3"
                    placeholder="Type Your Message"
                  ></textarea>
                  <button className="mt-4" type="submit">
                    Send Mail
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default FAQ;
