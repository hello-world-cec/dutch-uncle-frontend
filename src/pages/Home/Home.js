import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import {
  BiCurrentLocation,
  BiSearch,
  BiNews,
  BiSpa,
  BiCheckCircle,
  BiChevronRight,
} from 'react-icons/bi';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Link } from 'react-router-dom';
import { setCurrentLocation, refreshLocationDetails } from '../../api/PlaceAPI';

const Home = () => {
  //TODO: get default location from device location
  const [deviceLocation, setDeviceLocation] = useState('Chengannur');
  const json = localStorage.getItem('data');
  const [data, setData] = useState(JSON.parse(json));
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setCurrentLocation(deviceLocation);
    refreshLocationDetails().then((details) => {
      setData(details);
      setLoading(false);
    });
  }, [deviceLocation]);

  return loading ? (
    <div className="h-screen"></div>
  ) : (
    <div className="h-screen">
      <div className="w-screen p-8">
        <div className="flex items-center justify-between w-full h-12">
          <div className="flex items-center h-full px-6 py-4 rounded-md bg-product-blue text-product-dark">
            <BiCurrentLocation />
            <h2 className="ml-4 font-semibold ">{data.name}, India</h2>
          </div>
          <div className="h-full px-6 py-4 rounded-md bg-product-yellow">
            <Link to={'/profile'}>
              <FiUser />
            </Link>
          </div>
        </div>
        <div className="relative flex items-center mt-8">
          <BiSearch className="absolute text-xl left-4 text-product-dark" />
          <input
            type="text"
            className="w-full p-4 pl-12 border rounded-md bg-product-blue h-14 focus:outline-none text-product-dark placeholder-product-dark"
            placeholder="Explore"
            onClick={() => {
              setSearchDropDown(!searchDropDown);
            }}
            onBlur={() => {
              setSearchDropDown(!searchDropDown);
            }}
          />
          <div
            className={`absolute z-50 flex flex-col w-full text-gray-700 bg-red-900 rounded-sm rounded-md top-14 drop-shadow-md bg-product-light ring-black ring-1 ring-opacity-5 ${
              searchDropDown ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          >
            <button
              className="px-6 py-4 text-sm border-b hover:bg-gray-100"
              onClick={() => {
                setDeviceLocation('Chengannur');
              }}
            >
              Chengannur
            </button>
            <button
              className="px-6 py-4 text-sm border-b hover:bg-gray-200"
              onClick={() => {
                setDeviceLocation('Kochi');
              }}
            >
              Kochi
            </button>
            <button
              className="px-6 py-4 text-sm hover:bg-gray-100"
              onClick={() => {
                setDeviceLocation('Alappuzha');
              }}
            >
              Alappuzha
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="w-full text-xl text-center text-product-dark">
            {data.overview}
          </h2>
        </div>
        <div className="px-4 mt-8">
          <Link to="/news">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-pink text-product-light">
                  <BiNews />
                </div>

                <h2 className="ml-8 text-xl">What's happening</h2>
              </div>

              <BiChevronRight className="ml-4 text-4xl text-product-pink" />
            </div>
          </Link>
        </div>
        <div className="px-4 mt-6">
          <Link to="/dos-and-donts">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-blue text-product-light">
                  <BiCheckCircle />
                </div>

                <h2 className="ml-8 text-xl">Do's and Don'ts</h2>
              </div>
              <BiChevronRight className="ml-4 text-4xl text-product-blue" />
            </div>
          </Link>
        </div>
        <div className="px-4 mt-6 mb-16">
          <Link to="/culture">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-product-yellow text-product-light">
                  <BiSpa />
                </div>

                <h2 className="ml-8 text-xl">Culture</h2>
              </div>
              <BiChevronRight className="ml-4 text-4xl text-product-yellow" />
            </div>
          </Link>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
