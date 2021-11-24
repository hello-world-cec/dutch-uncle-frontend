import { useEffect, useState } from 'react';
import ContentView from '../../components/ContentView/ContentView';
import { getDosAndDonts } from '../../api/PlaceAPI';

const DosAndDonts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getDosAndDonts());
  }, []);

  return (
    <div>
      <ContentView
        title="Do's & Don'ts"
        features={data.features}
        imageURL={data.imageURL}
      />
    </div>
  );
};

export default DosAndDonts;
