import ContentView from '../../components/ContentView/ContentView';

const DosAndDonts = () => {
  const data = {
    title: "Do's & Don'ts",
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nulla optio tenetur, iusto ratione totam! Natus, id eosporro illo deleniti voluptatibus.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  };

  return (
    <div>
      <ContentView
        title={data.title}
        overview={data.overview}
        features={data.features}
      />
    </div>
  );
};

export default DosAndDonts;
