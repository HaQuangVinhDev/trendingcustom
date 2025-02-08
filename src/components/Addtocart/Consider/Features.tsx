const features = [
  { title: 'Premium Quality', description: 'Durable and high-grade materials.', checked: true },
  { title: 'Vibrant & Sharp Prints', description: 'Advanced technology for detail.', checked: true },
  { title: 'Scratch & Fade Resistant', description: 'Long-lasting design.', checked: true },
  { title: 'Carefully Inspected', description: 'Strict quality standards.', checked: false },
];

const Features = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Why Choose TrendingCustom</h2>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
            <span className={feature.checked ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
              {feature.checked ? '✔️' : '❌'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
