import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

function DropDown({ open }) {
  return (
    <>
      <div>
        <FiMoreVertical />
        {open && (
          <div className="absolute  top-16  w-36 right-0 flex flex-col drop-shadow-md bg-red-900 text-gray-700 bg-product-light ring-black ring-1 ring-opacity-5 rounded-sm">
            <a className="hover:bg-gray-100 px-4 py-2 text-sm" href="#">
              Report
            </a>
            <a className="hover:bg-gray-100 px-4 py-2 text-sm" href="#">
              Suggest
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
