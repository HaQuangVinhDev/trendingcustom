export default function CategoryGrid() {
  const categories = [
    {
      title: 'For Her',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_400x.png?v=1735282942',
    },
    {
      title: 'For Him',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_1_400x.png?v=1735282942',
    },
    {
      title: 'For Couples',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_2_400x.png?v=1735282942',
    },
    {
      title: 'For Friends',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_3_400x.png?v=1735282942',
    },
    {
      title: 'For Siblings',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_4_400x.png?v=1735282941',
    },
    {
      title: 'For Pets',
      image: 'https://trendingcustom.com/cdn/shop/files/Group_34541_5_400x.png?v=1735282942',
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 py-8 flex  flex-nowrap bg-[#e9f5f1]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative font-serif group cursor-pointer shadow-sm bg-white rounded-bl-[8px] rounded-br-[8px] "
            >
              <div className="aspect-square overflow-hidden rounded-lg ">
                <img
                  src={category.image || '/placeholder.svg'}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105  "
                />
              </div>
              <h3 className=" text-center justify-center items-center font-medium py-[9px]">{category.title}</h3>
            </div>
          ))}
        </div>
        {/* <Button /> */}
      </div>
    </section>
  );
}
