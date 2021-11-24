import { useEffect, useState } from 'react';
import { getRestaurants } from '../../api/PlaceAPI';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import CardView from '../../components/CardView/CardView';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  return (
    <div>
      <CardView title={'Restaurants Nearby'} places={restaurants} />
      <BottomNavigation />
    </div>
  );
};

export default Restaurants;
