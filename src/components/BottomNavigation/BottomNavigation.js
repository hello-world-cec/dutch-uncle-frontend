import { IoFastFoodOutline } from 'react-icons/io5';
import { BiHomeAlt, BiPlusCircle, BiLocationPlus } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BottomNavigation() {
  const Links = [
    {
      path: '/',
      icon: BiHomeAlt,
    },
    {
      path: '/services',
      icon: BiPlusCircle,
    },
    {
      path: '/restaurants',
      icon: IoFastFoodOutline,
    },
    {
      path: '/places',
      icon: BiLocationPlus,
    },
  ];

  const location = useLocation();
  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center w-full h-16 mt-2 bg-gray-100 justify-evenly ">
      {Links &&
        Links.map((link) => {
          return (
            <Link to={link.path}>
              <link.icon
                className={`text-2xl cursor-pointer ${
                  location.pathname === link.path
                    ? 'text-product-dark'
                    : 'text-gray-400'
                }`}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default BottomNavigation;
