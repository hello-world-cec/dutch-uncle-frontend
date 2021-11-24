import React, { useState } from 'react';
import { BiUserCircle, BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DropDown from '../../components/DropDown';
import { AiFillTrophy } from 'react-icons/ai';

import { GiTrophyCup, GiCrossedSwords, GiAncientSword } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';

function UserProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-100">
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

        <div className="flex flex-col  items-center pb-14 ">
          {/* <div className="pb-6 mt-10">
            <BiUserCircle size={100} />
          </div> */}
          <div>
            <img
              className="rounded-full shadow-xl mx-auto mt-10  h-52 w-48 bg-cover bg-center"
              src="https://source.unsplash.com/MP0IUfwrn0A"
            />
          </div>
          <h1 className="w-full text-3xl text-center mt-10 text-product-dark">
            User{' '}
          </h1>
        </div>

        <div className="  rounded-t-lg filter drop-shadow-lg border-light-blue-500">
          {/* <div className="flex items-center  justify-center gap-4 mt-5">
            <h1 className="text-3xl text-center"> 277 </h1>
            <GiTrophyCup size={25} color="red" />
          </div> */}
          <div className="grid grid-cols-2 gap-4 mt-8 justify-items-center">
            <div className="flex justify-center items-center border-4 h-2git add .0 w-20 rounded-md bg-gray-100 border-opacity-0">
              <GiCrossedSwords size={55} className="bg-white" />
            </div>
            <div className="flex justify-center items-center w-20 h-20 border-4 border-opacity-0 rounded-md bg-gray-100">
              <GiAncientSword size={55} className="bg-white" />
            </div>
            <div className="flex justify-center items-center w-20 h-20 border-4 border-opacity-0 rounded-md bg-gray-100">
              <AiFillTrophy size={55} className="bg-white" />
            </div>
            <div className="flex justify-center items-center w-20 h-20 border-4 border-opacity-0 rounded-md bg-gray-100">
              <GiCrossedSwords size={55} className="bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
