import { useEffect, useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import CardView from '../../components/CardView/CardView';
import { getServices } from '../../api/PlaceAPI';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <div>
      <CardView title={'Emergency Services'} services={services} />
      <BottomNavigation />
    </div>
  );
};

export default Services;
