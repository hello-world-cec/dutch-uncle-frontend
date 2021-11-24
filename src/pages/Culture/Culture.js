import { useEffect, useState } from 'react';
import ContentView from '../../components/ContentView/ContentView';
import { getCulture } from '../../api/PlaceAPI';

const Culture = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getCulture());
  }, []);

  return (
    <div>
      <ContentView
        title="Culture"
        features={data.features}
        imageURL={data.imageURL}
      />
    </div>
  );
};

export default Culture;
