export default function Shopbycategory() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex  items-center justify-center gap-2">Shop by Category</h2>
        <p className="text-gray-600 mt-4 flex justify-center ">
          Looking for custom ornaments or home decor? You’ll find the perfect gift for <br /> any occasion right here!
        </p>
      </div>
      {/*  */}

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Cards */}
        <div className="rounded-lg overflow-hidden ">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7675683e2a292c153233302915181833352476757775737675757076717e72183022256a76692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d3335322_400x.webp?v=1737437249"
              alt="Music Fridge Magnet"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="font-bold font-[Plus Jakarta Sans, sans-serif !important;] p-4 flex justify-center text-[20px]">
            <p>Music Fridge Magnet</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7776683d25127708702f300d3d1818757377767674777176767f183022256a75692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437367"
              alt="Wooden Plaque"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="font-bold font-[Plus Jakarta Sans, sans-serif !important;] p-4 flex justify-center text-[20px]">
            <p>Wooden Plaque</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/image-2_a07b00ee-57ca-4c35-a52b-e304948d7eab_400x.png?v=1736498998"
              alt="LED Night Light"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="font-bold font-[Plus Jakarta Sans, sans-serif !important;] p-4 flex justify-center text-[20px]">
            <p>LED Night Light</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <a href="#">
            <img
              src="https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a777168050a280034150305023618187573777577717270777672183022256a73692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437563"
              alt="Post"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="font-bold font-[Plus Jakarta Sans, sans-serif !important;] p-4 flex justify-center text-[20px]">
            <p>Post</p>
          </div>
        </div>
      </div>
    </section>
  );
}
