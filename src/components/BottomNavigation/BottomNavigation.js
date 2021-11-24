import { IoFastFoodOutline } from 'react-icons/io5';
import { BiHomeAlt, BiPlusCircle, BiLocationPlus } from 'react-icons/bi';

function BottomNavigation() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center w-full h-16 mt-2 bg-gray-100 justify-evenly ">
      <BiHomeAlt className="text-2xl cursor-pointer text-product-dark" />
      <BiPlusCircle className="text-2xl text-gray-400 cursor-pointer " />
      <IoFastFoodOutline className="text-2xl text-gray-400 " />
      <BiLocationPlus className="text-2xl text-gray-400 cursor-pointer " />
    </div>
  );
}

export default BottomNavigation;
