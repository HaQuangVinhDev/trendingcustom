import { Button } from '../../../components/ui/button';

function Bodyheader() {
  return (
    <>
      <div className="container ">
        <div>
          <div className="w- flex justify-between">
            <div className="pl-[150px]">
              <Button className="  border border-black  w-[190px]">Filters</Button>
            </div>
            <div className=" pr-[150px] gap-4">
              <Button className="hover:bg-red-600 text-white   rounded-[4px] bg-red-500 ">Featured</Button>
              <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">New</Button>
              <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">Price low to high</Button>
              <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">Price hight to low</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bodyheader;
