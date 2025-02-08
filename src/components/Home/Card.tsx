function Card() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container   px-6 md:px-12 py-5  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#ffebd02c] w-full p-6 rounded-lg">
          {[
            {
              img: 'https://trendingcustom.com/cdn/shop/files/transaction_1_2eaee27c-2af9-4df1-8def-51d50e3854d8_100x.png?v=1728283255',
              title: 'Safe Payment',
              desc: 'We take your privacy seriously and protect it with complete security.',
            },
            {
              img: 'https://trendingcustom.com/cdn/shop/files/arrow_1_3252f918-c202-426f-9796-f63ac5a91dbd_100x.png?v=1728283322',
              title: 'Secure Logistic',
              desc: 'Package safety - Full refund for your damaged or lost package.',
            },
            {
              img: 'https://trendingcustom.com/cdn/shop/files/insurance_1_1_4c25f3d4-543c-409e-923d-5fea976e6770_100x.png?v=1728283338',
              title: 'Secure Privacy',
              desc: 'We take all necessary precautions to protect your personal information.',
            },
            {
              img: 'https://trendingcustom.com/cdn/shop/files/global_1_1c58fac9-e205-4691-b6ed-4b38aae5f765_100x.png?v=1728283356',
              title: 'Express Shipping',
              desc: 'Available as Standard or Express delivery',
            },
          ].map((item, index) => (
            <div key={index} className="p-6 text-center ">
              <img src={item.img} alt={item.title} className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <a href="#" className="underline text-blue-600 text-sm">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center pb-6">As seen on</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-md">
            {[
              'https://trendingcustom.com/cdn/shop/files/rfdtv_200x.png?v=1649814658',
              'https://trendingcustom.com/cdn/shop/files/fox_200x.png?v=1649814488',
              'https://trendingcustom.com/cdn/shop/files/newsnet_200x.png?v=1649814488',
              'https://trendingcustom.com/cdn/shop/files/ncn_200x.png?v=1649814488',
              'https://trendingcustom.com/cdn/shop/files/nbc_200x.png?v=1649814488',
            ].map((src, index) => (
              <div key={index} className="w-16 sm:w-20 h-16 sm:h-20 mx-auto">
                <img src={src} alt="blog" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg text-gray-500 text-center pt-6">And over 200 news sites</p>
      </div>
    </section>
  );
}

export default Card;
