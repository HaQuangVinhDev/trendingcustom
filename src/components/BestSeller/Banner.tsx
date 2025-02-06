import React from 'react';

function Banner() {
  return (
    <div className=" relative container  py-4">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="//trendingcustom.com/cdn/shop/t/57/assets/best-sellers-pc.png?v=138456378624183897001691676940"
        />
        <source
          media="(min-width: 768px)"
          srcSet="//trendingcustom.com/cdn/shop/t/57/assets/best-sellers-tablet.png?v=169280630438275693631691676940"
        />
        <img
          src="//trendingcustom.com/cdn/shop/t/57/assets/best-sellers-mobile.png?v=183578064170196121981691676939"
          alt="Best sellers"
          loading="lazy"
        />
        <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  p-4 space-y-4  animate-fadeIn ">
          <h1 className="font-bold text-[16px]">Best Sellers</h1>
          <p>Find the perfect personalized gift for your loved ones on our Best Sellers page!</p>
        </div>
      </picture>
    </div>
  );
}

export default Banner;
