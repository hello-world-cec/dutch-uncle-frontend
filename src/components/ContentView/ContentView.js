import react from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';

const ContentView = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen pt-8 bg-product-dark">
      <div className="flex items-center justify-between w-full h-12">
        <div className="flex items-center h-full p-4 ml-8 rounded-md bg-product-yellow text-product-dark">
          <BiChevronLeft className="text-2xl" />
        </div>
        <div className="h-full p-4 mr-8 rounded-md bg-product-light">
          <FiMoreVertical />
        </div>
      </div>

      <div className="w-full h-full p-8 mt-64 rounded-t-3xl bg-product-light">
        <div className="pt-4">
          <h2 className="text-2xl">CULTURE</h2>
          <h2 className="mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium nulla optio tenetur, iusto ratione totam! Natus, id eos
            porro illo deleniti voluptatibus.
          </h2>
          <ul className="pl-4 mt-4 list-disc">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentView;
