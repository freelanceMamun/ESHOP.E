import React from 'react';
import { MdSearch, MdFacebook } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import img1 from '../../Asset/image/Blog/Mask Group (1).png';
import img2 from '../../Asset/image/Blog/Rectangle 126.png';
import { Link } from 'react-router-dom';

const BlogFilter = () => {
  return (
    <div className="col-lg-5">
      <div className="blog-Filter">
        <h3>Search</h3>
        <div className="Search mb-5">
          <input type="text" placeholder="Search For Post"></input>
          <MdSearch></MdSearch>
        </div>
        <h3>Categories</h3>
        <div className="Categories mb-5">
          <div className="categoriesBtn d-flex ">
            <button>Hobbies (14)</button>
            <button>Hobbies (14)</button>
            <button>Hobbies (14)</button>
            <button>Hobbies (14)</button>
            <button>Hobbies (14)</button>
            <button>Hobbies (14)</button>
          </div>
        </div>
        <h3>Recent Post</h3>
        <div className="recentPost mb-5">
          {/* blog post */}
          <div className="d-flex align-items-center gap-2 mb-4 recentContent">
            <img src={img2} alt=""></img>
            <div className="content">
              <p>It is a long established fact</p>
              <p>Aug 09 2020</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 recentContent">
            <img src={img2} alt=""></img>
            <div className="content">
              <p>It is a long established fact</p>
              <p>Aug 09 2020</p>
            </div>
          </div>
        </div>
        <h3>Offer product</h3>
        <div className="offerProducts mb-5">
          <div className="offercontent">
            <div className="d-flex flex-column text-center mb-3">
              <img src={img1} alt=""></img>
              <h6>Duis Ictaus est</h6>
              <p>$12.00 - $15.00</p>
            </div>
            <div className="d-flex flex-column text-center  mb-3">
              <img src={img1} alt=""></img>
              <h6>Duis Ictaus est</h6>
              <p>$12.00 - $15.00</p>
            </div>
            <div className="d-flex flex-column text-center  mb-3">
              <img src={img1} alt=""></img>
              <h6>Duis Ictaus est</h6>
              <p>$12.00 - $15.00</p>
            </div>
            <div className="d-flex flex-column text-center  mb-3">
              <img src={img1} alt=""></img>
              <h6>Duis Ictaus est</h6>
              <p>$12.00 - $15.00</p>
            </div>
          </div>
        </div>
        <h3>Follow</h3>
        <div className="Social d-flex gap-3 mb-5">
          <Link>
            <MdFacebook></MdFacebook>
          </Link>
          <Link>
            <AiOutlineInstagram></AiOutlineInstagram>
          </Link>
          <Link>
            <AiOutlineTwitter></AiOutlineTwitter>
          </Link>
        </div>
        <h3>Tags</h3>
        <div className="Tags">
          <Link>General Insas</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
