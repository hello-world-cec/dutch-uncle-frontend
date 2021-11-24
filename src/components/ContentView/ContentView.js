import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown';

const ContentView = ({ title, overview, features }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center w-screen h-screen pt-8 bg-product-dark">
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

      <div className="w-full h-full p-8 mt-64 rounded-t-3xl bg-product-light">
        <div className="pt-4">
          {title && <h2 className="text-2xl">{title}</h2>}
          {overview && <h2 className="mt-4 text-justify">{overview}</h2>}

          {features && (
            <ul className="pl-4 mt-4 list-disc">
              {features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentView;
