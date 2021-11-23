import { IoFastFoodOutline } from 'react-icons/io5';
import { BiHomeAlt, BiPlusCircle, BiLocationPlus } from 'react-icons/bi';

function bottomNavigation() {
  return (
    <div className="flex fixed items-center justify-evenly w-full mt-2 bg-gray-100 h-14 ">
      <IoFastFoodOutline className=" text-4xl   text-gray-600" />
      <BiHomeAlt className=" text-4xl  cursor-pointer  text-gray-600" />
      <BiPlusCircle className=" text-4xl  cursor-pointer text-gray-600" />
      <BiLocationPlus className=" text-4xl cursor-pointer text-gray-600" />
    </div>
  );
}

export default bottomNavigation;
