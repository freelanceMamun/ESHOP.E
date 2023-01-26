import React from 'react';
import BlogFilter from '../Components/Blog/BlogFilter';
import BlogCart from '../Components/Blog/BlogCart';
import Img1 from '../Asset/image/Blog/Frame 3.png';
import image2 from '../Asset/image/Blog/Frame 4.png';
import { MdPerson, MdOutlineMailOutline } from 'react-icons/md';
import { BiMessageDots, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import OtherComimg from '../Asset/image/image 1174.png';
import { UserAllStateData } from '../Context/UseContextProvider';
import LoaderSpinner from '../Components/Loader';
import CurrentPageStatus from '../Components/CurrentPageStatus';
const BlogDetails = () => {
  const { isLoading } = UserAllStateData();

  //  userParams Search blog data
  return (
    <>
      {isLoading && isLoading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div>
          <CurrentPageStatus></CurrentPageStatus>
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-lg-7">
                <BlogCart></BlogCart>
                <div className="FullDisctiptions">
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,{' '}
                  </p>
                  <div className="row mt-5 mb-5">
                    <div className="col-6">
                      <div className="blogDeShotImg">
                        <img src={image2} alt=""></img>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="blogDeShotImg">
                        <img src={Img1} alt=""></img>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,
                  </p>
                </div>
                <div className="ChangeBlog">
                  <div className="d-flex justify-content-between">
                    <div>
                      <BiLeftArrowAlt className="fs-5"></BiLeftArrowAlt>
                      <button>Previous Post</button>
                    </div>
                    <div className="">
                      <button>Next Post</button>
                      <BiRightArrowAlt className="fs-5"></BiRightArrowAlt>
                    </div>
                  </div>
                </div>
                <div className="CommentSection">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="InputBoxComment d-flex align-items-center mb-4">
                          <MdPerson></MdPerson>
                          <input type="text" placeholder="Your Name*"></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="InputBoxComment d-flex align-items-center mb-4">
                          <MdOutlineMailOutline></MdOutlineMailOutline>
                          <input
                            type="email"
                            placeholder="White Your Email*"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="textBox d-flex ">
                      <BiMessageDots className="mt-1"></BiMessageDots>
                      <textarea placeholder="Write your comment"></textarea>
                    </div>
                    <div className="Check mt-3 gap-1 mb-4 d-flex align-items-center">
                      <input type="checkbox"></input>
                      <span>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </div>
                    <div className="">
                      <button type="button">Continue Shipping</button>
                    </div>
                  </form>
                </div>
              </div>
              <BlogFilter></BlogFilter>
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
        </div>
      )}
    </>
  );
};

export default BlogDetails;
