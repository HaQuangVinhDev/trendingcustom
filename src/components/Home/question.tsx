import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function Question() {
  return (
    <div className="container flex flex-auto pb-[50px] px-4  justify-center">
      <div className="  mx-auto   justify-center items-center   flex flex-col">
        <h1 className="text-[40px] text-[#373f47] font-bold item-center justify-center">Unlock 10% OFF</h1>
        <h1 className="text-[40px] text-[#373f47] font-bold item-center justify-center"> Your First Order</h1>
        <span className="item-center justify-center py-[10px]">
          Find special gifts made just for you and get a cool 10% OFF your
          <br /> first buy! Make gift-giving super awesome with a sprinkle of extra
          <br /> love!
        </span>
        <div className="py-[10px] px-[8px] ">
          <Input
            className="w-[450px] text-[18px] font-semibold border-[#949596] box-border rounded-[4px] text-[#949596]"
            placeholder="First Name"
          />
        </div>

        <div className="py-[10px] px-[8px]">
          <Input
            className="w-[450px] text-[18px] font-semibold border-[#949596] box-border rounded-[4px] text-[#949596]"
            placeholder="Email"
          />
        </div>

        <div>
          <Button className="w-[450px] text-[18px] font-semibold pointer-events hover:bg-red-500 bg-red-500 text-white ">
            Claim Your 10% OFF
          </Button>
        </div>
      </div>
    </div>
  );
}
