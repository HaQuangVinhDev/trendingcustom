function Ban() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/*  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Product Cards */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/Group_35144_1.png?v=1737023126&width=1170"
              alt="Custom Spotify Plaque"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>

        <div className="rounded-lg overflow-hidden ">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/Group_35118_5737a383-59d5-4934-bd30-08d94872b47c.png?v=1729331223&width=1170"
              alt="Couple Wall Art"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Ban;
