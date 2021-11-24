import react from 'react';
import { BiPhone, BiLocationPlus,BiDoorOpen } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
function ServiceCard() {
    return(
        <div className="py-8 px-8 max-w-sm mx-auto bg-product-blue rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">College of Engineering Chengannur</p>
                    <p className="text-sm text-gray-600">(x kms away)</p>
                </div>
                <div className="flex items-center">
                    <BiLocationPlus className="text-4xl"/> <p className="text-gray-500 ml-4 font-normal text-base"> College of Engineering Chengannur, Chengannur P.O Alappuzha district, Kerala</p>
                </div>
                <div className="flex items-center">
                    <BiPhone className="text-2xl" /> <p className="text-gray-500 ml-4 font-normal text-base">+91-9876 54 3210</p>   
                </div>
                <div className="flex items-center">
                    <AiOutlineMail className="text-xl" /> <p className="text-gray-500 ml-4 font-normal text-base">principal@ceconline.edu</p>   
                </div>
                <div className="flex items-center">
                    <BiDoorOpen className="text-xl" /> <p className="text-gray-500 ml-4 font-normal text-base">09:00 AM - 05:00 PM</p>   
                </div>
            </div>
        </div>
    );
}
export default ServiceCard;
