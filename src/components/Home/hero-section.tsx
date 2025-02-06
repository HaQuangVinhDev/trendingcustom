export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row shadow-lg">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0  bg-cyan-500">
        <h2 className="text-4xl font-bold mb-6">Grateful For Millions Who Inspire Us!</h2>
        <p className="text-gray-600 text-lg mb-8">
          TrendingCustom delivers high-quality personalized gifts, crafted with care to celebrate life's special
          moments.
        </p>
        <a href="#" className="inline-block bg-[#F04B23] hover:bg-[#F04B23]/90 text-white px-8 py-3 rounded-md text-lg">
          Discover Now
        </a>
        <div className="mt-12">
          <p className="text-gray-500 mb-4">As seen on</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#FF8C00]">FOX</span>
            <span className="text-2xl font-bold text-[#000000]">NBC</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2  bg-cyan-500">
        <div className="grid grid-cols-2 gap-4">
          {/* Product Images Grid */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Custom Spotify Plaque"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Personalized Wall Art"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Light-up Artwork"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Custom T-shirt"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
