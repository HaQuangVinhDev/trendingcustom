export default function OurBlog() {
  const Blog = [
    {
      title: 'Top 10 Customer Reviews: Heartfelt Experiences with Our Personalized Gifts-Feb 3 2025',
      date: 'February 02,2025',
      link: '/',
      image: 'https://trendingcustom.com/cdn/shop/articles/Banner_Blog_03.02_400x.png?v=1738556091',
    },
    {
      title: 'Love in Every Detail: Swoon-Worthy Gifts for Your Valentine!',
      date: 'February 22,2025',
      link: '/',
      image:
        'https://trendingcustom.com/cdn/shop/articles/Valentines_6_d894d20b-11e6-466c-9918-bf1b531758d8_400x.gif?v=1737580502',
    },
    {
      title: 'Our Top Reviews from Last Week: Stories That Made Us Smile',
      date: 'February 19,2025',
      link: '/',
      image:
        'https://trendingcustom.com/cdn/shop/articles/Title_8eba078f-c0c8-43f2-8537-a56875fdd975_400x.png?v=1737323112',
    },
    {
      title: 'Heartfelt 2025 Valentines Day Personalized Music Fridge Magnet Gift Guide - January 16th',
      date: 'February 15,2025',
      link: '/',
      image:
        'https://trendingcustom.com/cdn/shop/articles/Banner_Gift_Guide_16.01_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_520x500_c099cd69-497b-40f3-b1a3-18de493df629_400x.png?v=1737003249',
    },
  ];

  return (
    <section className="container  mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">Our Blog</h2>
        <p className="text-gray-600 mt-4 flex justify-center "></p>
      </div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-15 h-1/4 mx-auto">
          {/* Lặp qua mảng Blog */}
          {Blog.map((blog, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <a href={blog.link}>
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
              </a>
              <div className="p-4">
                <a href={blog.link}>
                  <div className="font-bold font-[Plus Jakarta Sans, sans-serif] text-[20px]">
                    <p>{blog.title}</p>
                  </div>
                </a>
                <p className="text-gray-600 text-sm mt-2">{blog.date}</p> {/* Hiển thị ngày ở dưới tiêu đề */}
                <a href={blog.link} className="text-blue-500 text-sm mt-2 inline-block underline">
                  Read More
                </a>{' '}
                {/* Link với chữ "Read More" */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
