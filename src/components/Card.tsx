function Card() {
  return (
    <section>
      <div className="container px-12 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#ffebd02c] ">
          <div className="p-8 text-center  ">
            <img
              src="https://trendingcustom.com/cdn/shop/files/transaction_1_2eaee27c-2af9-4df1-8def-51d50e3854d8_100x.png?v=1728283255"
              alt="selling"
              className="w-12 h-12 mx-auto "
            />
            <p className="text-[16px] font-bold ">Safe Payment</p>
            <p>We take your privacy seriously and protect it with complete security.</p>

            <a href="#" className="underline ">
              LearnMore
            </a>
          </div>
          <div className="p-8 text-center  ">
            <img
              src="https://trendingcustom.com/cdn/shop/files/arrow_1_3252f918-c202-426f-9796-f63ac5a91dbd_100x.png?v=1728283322"
              alt="selling"
              className="w-12 h-12 mx-auto "
            />
            <p className="text-[16px] font-bold ">Secure Logistic</p>
            <p>Package safety - Full refund for your damaged or lost package.</p>

            <a href="#" className="underline ">
              LearnMore
            </a>
          </div>
          <div className="p-8 text-center  ">
            <img
              src="https://trendingcustom.com/cdn/shop/files/insurance_1_1_4c25f3d4-543c-409e-923d-5fea976e6770_100x.png?v=1728283338"
              alt="selling"
              className="w-12 h-12 mx-auto "
            />
            <p className="text-[16px] font-bold ">Secure Privacy</p>
            <p>We take all necessary precautions to protect your personal information.</p>

            <a href="#" className="underline ">
              LearnMore
            </a>
          </div>

          <div className="p-8 text-center  ">
            <img
              src="https://trendingcustom.com/cdn/shop/files/global_1_1c58fac9-e205-4691-b6ed-4b38aae5f765_100x.png?v=1728283356"
              alt="selling"
              className="w-12 h-12 mx-auto "
            />
            <p className="text-[16px] font-bold ">Express Shipping</p>
            <p>Available as Standard or Express delivery</p>

            <a href="#" className="underline ">
              LearnMore
            </a>
          </div>
        </div>
      </div>

      <div className=" container p-8">
        <h2 className="text-3xl font-bold text-center pb-6">As seen on</h2>
        <div className="flex items-center  ">
          <div className="w-13 h-13 mx-auto  grid grid-cols-5 gap-2">
            <img src="https://trendingcustom.com/cdn/shop/files/rfdtv_200x.png?v=1649814658" alt="blog" />

            <img src="https://trendingcustom.com/cdn/shop/files/fox_200x.png?v=1649814488" alt="blog" />

            <img src="https://trendingcustom.com/cdn/shop/files/newsnet_200x.png?v=1649814488" alt="blog" />

            <img src="https://trendingcustom.com/cdn/shop/files/ncn_200x.png?v=1649814488" alt="blog" />

            <img src="https://trendingcustom.com/cdn/shop/files/nbc_200x.png?v=1649814488" alt="blog" />
          </div>
        </div>
        <p className="text-xl text-[#9e9ea7] text-center pt-6"> And over 200 news sites</p>
      </div>
    </section>
  );
}

export default Card;
