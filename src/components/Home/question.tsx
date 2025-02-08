import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function Question() {
  return (
    <div className="relative mx-auto container flex flex-auto pb-8 px-4 justify-center">
      <div className="max-w-md w-full mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#373f47] font-bold leading-tight mb-4">
          Unlock 10% <br /> OFF Your First Order
        </h1>

        <p className="text-sm md:text-base text-gray-600 mb-6">
          Find special gifts made just for you and get a cool 10% OFF your first buy! Make gift-giving super awesome
          with a sprinkle of extra love!
        </p>
        <div className="w-full space-y-4">
          <Input
            className="w-full text-base md:text-lg font-semibold border-gray-300 rounded-md text-gray-700 placeholder-gray-500"
            placeholder="First Name"
          />
          <Input
            className="w-full text-base md:text-lg font-semibold border-gray-300 rounded-md text-gray-700 placeholder-gray-500"
            placeholder="Email"
          />
          <Button className="w-full text-base md:text-lg font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors duration-200">
            Claim Your 10% OFF
          </Button>
        </div>
      </div>
    </div>
  );
}
