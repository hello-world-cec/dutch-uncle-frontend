import {
    BiDotsVerticalRounded,
    BiChevronLeft
} from 'react-icons/bi';

import {GiTrophyCup} from "react-icons/gi";
import {BsFillPersonFill} from 'react-icons/bs';

function UserProfile() {
  return (
    <div className="h-screen">
      <div className="w-screen p-8">
        <div className="flex items-center justify-between w-full h-12">
          <div className="flex items-center h-full px-4 py-4 rounded-md bg-product-blue text-product-dark">
            <BiChevronLeft />
          </div>
          <div className="flex item-center h-full px-4 py-4 rounded-md bg-product-yellow">
            <BiDotsVerticalRounded />
          </div>
        </div>

        <div className='mt-8 m-auto flex items-center box-border h-32 w-32 p-2 border-4 '>
          <BsFillPersonFill size={200} color="lightblue" />
        </div>
        <div className='flex items-center justifly-center '>
          <h1 className="text-4xl w-full text-xl text-center text-product-dark">John Depp</h1>
        </div>


        <div className='mt-8 filter drop-shadow-lg border-t-4 border-light-blue-500 border-opacity-100 rounded-t-lg'>

          <div className="mt-5 flex gap-4 items-center justify-center">
            <h1 className="text-3xl text-center"> 277 </h1>
            <GiTrophyCup size={25} color="red" />
          </div>
          <div className="mt-8 justify-items-center grid gap-4 grid-cols-2">
            <div className="border-4 h-2git add .0 w-20 rounded-md bg-product-dark border-opacity-0"></div>
            <div className="border-4 h-20 w-20 rounded-md bg-product-dark border-opacity-0"></div>
            <div className="border-4 h-20 w-20 rounded-md bg-product-dark border-opacity-0"></div>
            <div className="border-4 h-20 w-20 rounded-md bg-product-dark border-opacity-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;