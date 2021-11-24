import react from 'react';

function GeneralCard(){
    return(
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" class="w-full block h-full">
        <img alt="restaurant / place image" src="" class="max-h-40 w-full object-cover"/>
        <div class="bg-product-blue dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
                Title
            </p>
            <p class="text-gray-600 dark:text-gray-300  text-md">
            (RN) specializes in delicious food featuring fresh ingredients and masterful preparation by the (RN) culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, (RN’s) lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.
            </p>
        </div>
    </a>
</div>
    );
}
export default GeneralCard;