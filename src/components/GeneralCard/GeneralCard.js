import react from 'react';

const GeneralCard = ({ title, about, imageURL }) => {
  return (
    <div class="overflow-hidden rounded-lg h-90 cursor-pointer w-full mt-8">
      <img
        src={imageURL}
        class="max-h-40 w-full object-cover"
        alt="restaurant"
      />
      <div class="bg-product-blue dark:bg-gray-800 w-full p-4">
        <p class="text-indigo-500 text-md font-medium">{title}</p>
        <p class="text-gray-600 dark:text-gray-300  text-md">{about}</p>
      </div>
    </div>
  );
};
export default GeneralCard;
