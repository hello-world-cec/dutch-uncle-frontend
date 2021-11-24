import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DropDown from '../../components/DropDown';

import { GiTrophyCup } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';

function UserProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen">
      <div className="w-screen p-8">
        <div className="flex items-center justify-between w-full h-12">
          <Link to="/">
            <div className="flex items-center h-full p-4 ml-8 rounded-md bg-product-yellow text-product-dark">
              <BiChevronLeft className="text-2xl" />
            </div>
          </Link>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="relative h-full p-4 mr-8 rounded-md bg-product-light"
          >
            <DropDown open={open} />
          </div>
        </div>
        <div className="box-border flex items-center w-32 h-32 p-2 m-auto mt-8 border-4 ">
          <BsFillPersonFill size={200} color="lightblue" />
        </div>
        <div className="flex items-center justifly-center ">
          <h1 className="w-full text-xl text-4xl text-center text-product-dark">
            John Depp
          </h1>
        </div>

        <div className="mt-8 border-t-4 border-opacity-100 rounded-t-lg filter drop-shadow-lg border-light-blue-500">
          <div className="flex items-center justify-center gap-4 mt-5">
            <h1 className="text-3xl text-center"> 277 </h1>
            <GiTrophyCup size={25} color="red" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 justify-items-center">
            <div className="border-4 h-2git add .0 w-20 rounded-md bg-product-dark border-opacity-0"></div>
            <div className="w-20 h-20 border-4 border-opacity-0 rounded-md bg-product-dark"></div>
            <div className="w-20 h-20 border-4 border-opacity-0 rounded-md bg-product-dark"></div>
            <div className="w-20 h-20 border-4 border-opacity-0 rounded-md bg-product-dark"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
