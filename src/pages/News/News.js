import { useEffect, useState } from 'react';
import { getNews } from '../../api/PlaceAPI';
import CardView from '../../components/CardView/CardView';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(getNews);
  }, []);

  return (
    <div>
      <CardView showBackButton={true} title={'Whats Happening'} news={news} />
    </div>
  );
};

export default News;
