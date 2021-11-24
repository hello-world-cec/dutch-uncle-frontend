import { useEffect, useState } from 'react';
import { getPlaces } from '../../api/PlaceAPI';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import CardView from '../../components/CardView/CardView';

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setPlaces(getPlaces());
  }, []);

  return (
    <div>
      <CardView title={'Places to Visit'} places={places} />
      <BottomNavigation />
    </div>
  );
};

export default Places;
