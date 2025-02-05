import { Gift } from 'lucide-react';

function Shopbycategory() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Cards */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Custom Spotify Plaque"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Custom Spotify Song Plaque</h3>
            <p className="text-gray-600">Personalized music memories</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Couple Wall Art"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Personalized Couple Art</h3>
            <p className="text-gray-600">Custom wall decor</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FXj9YQS7IfyR27A5uS8ClVHtpTg8kF.png"
            alt="Light Box Art"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Custom Light Box</h3>
            <p className="text-gray-600">Illuminated memories</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="#">See all products →</a>
      </div>
    </section>
  );
}

export default Shopbycategory;
