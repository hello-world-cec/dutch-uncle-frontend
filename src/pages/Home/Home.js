import react from 'react';
import { FiUser } from 'react-icons/fi';
import {
  BiCurrentLocation,
  BiSearch,
  BiNews,
  BiSpa,
  BiCheckCircle,
  BiChevronRight,
} from 'react-icons/bi';

const Home = () => {
  return (
    <div className="w-screen h-screen p-8">
      <div className="flex items-center justify-between w-full h-12">
        <div className="flex items-center h-full px-6 py-4 rounded-md bg-product-blue text-product-dark">
          <BiCurrentLocation />
          <h2 className="ml-4">Chengannur, India</h2>
        </div>
        <div className="h-full px-6 py-4 rounded-md bg-product-yellow">
          <FiUser />
        </div>
      </div>
      <div className="relative flex items-center mt-8">
        <BiSearch className="absolute text-xl left-4 text-product-dark" />
        <input
          type="text"
          className="w-full p-4 pl-12 border rounded-md bg-product-blue h-14 focus:outline-none text-product-dark placeholder-product-dark"
          placeholder="Explore"
        />
      </div>
      <div className="mt-8">
        <h2 className="w-full text-xl text-center text-product-dark">
          <span className="text-4xl font-semibold text-product-blue">
            Chengannur&nbsp;
          </span>
          is a Municipality in the Alappuzha district of Kerala State, India. It
          is located in the extreme eastern part of the Alappuzha district, on
          the banks of Pamba River.
        </h2>
      </div>
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-pink text-product-light">
              <BiNews />
            </div>

            <h2 className="ml-8 text-xl">What's happening</h2>
          </div>

          <BiChevronRight className="ml-4 text-4xl text-product-pink" />
        </div>
      </div>
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-blue text-product-light">
              <BiCheckCircle />
            </div>

            <h2 className="ml-8 text-xl">Do's and Don'ts</h2>
          </div>
          <BiChevronRight className="ml-4 text-4xl text-product-blue" />
        </div>
      </div>
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-yellow text-product-light">
              <BiSpa />
            </div>

            <h2 className="ml-8 text-xl">Culture</h2>
          </div>
          <BiChevronRight className="ml-4 text-4xl text-product-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Home;
