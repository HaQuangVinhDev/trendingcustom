function Banner() {
  return (
    <div className="relative mx-auto  py-4 container ">
      <picture className="block w-full">
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
          className="w-full h-auto"
        />
      </picture>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-1 sm:space-y-4  bg-opacity-0 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-fadeIn">
          <strong className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px]">Best Sellers</strong>
          <p className="text-sm sm:text-base md:text-lg lg:text-[16px]">
            Find the perfect personalized gift for your loved ones on our Best Sellers page!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
