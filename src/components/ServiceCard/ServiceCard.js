import react from 'react';
import { BiPhone, BiLocationPlus, BiDoorOpen } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
const ServiceCard = ({
  name,
  contact,
  distance,
  openingTime,
  closingTime,
  address,
}) => {
  return (
    <div className="w-full px-8 py-8 mt-8 space-y-2 shadow-md bg-product-blue rounded-xl">
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="text-sm text-gray-600">({distance} kms away)</p>
        </div>
        <div className="flex items-center mt-2">
          <BiLocationPlus className="text-2xl" />{' '}
          <p className="ml-4 text-base font-normal text-gray-500">{address}</p>
        </div>
        <div className="flex items-center mt-2">
          <BiPhone className="text-2xl" />{' '}
          <p className="ml-4 text-base font-normal text-gray-500">{contact}</p>
        </div>
        <div className="flex items-center mt-2">
          <BiDoorOpen className="text-2xl" />{' '}
          <p className="ml-4 text-base font-normal text-gray-500">
            {openingTime} - {closingTime}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
