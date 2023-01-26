import React from 'react';

import blogImg from '../../Asset/image/bruce-mars-FWVMhUa_wbY-unsplash 2.png';
import Svg1 from '../../Asset/image/Vector (1).svg';
import Svg2 from '../../Asset/image/Vector.svg';
const BlogCart = ({ img, title, Dis, ReadMore }) => {
  return (
    <div className="">
      <div className="blogimg">
        <img src={blogImg} alt="" />
      </div>
      <div className="blog-content">
        <div className="d-flex gap-5">
          <div className="mt-3">
            <img className="svgIcon" src={Svg1} alt=""></img>
            <button className="btn1">Surf Axion</button>
          </div>
          <div className="mt-3">
            <img className="svgIcon" src={Svg2} alt=""></img>
            <button className="btn2">Aug 09 2020</button>
          </div>
        </div>
        <div className="blog-title mt-3 ">
          <h3>Aenean vitae in aliquam ultrices lectus. Etiam.</h3>
        </div>
        <div className="blog-dis mt-3 mb-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
        </div>
        {ReadMore}
      </div>
    </div>
  );
};

export default BlogCart;
