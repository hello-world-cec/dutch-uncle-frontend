import react from 'react';

const GeneralCard = ({ title, about, imageURL }) => {
  return (
    <div className="w-full mt-8 overflow-hidden rounded-lg cursor-pointer h-90">
      <img
        src={imageURL}
        className="object-cover w-full max-h-40"
        alt="restaurant"
      />
      <div className="w-full p-4 bg-product-blue dark:bg-gray-800">
        <p className="font-medium text-indigo-500 text-md">{title}</p>
        <p className="text-gray-600 dark:text-gray-300 text-md">{about}</p>
      </div>
    </div>
  );
};
export default GeneralCard;
