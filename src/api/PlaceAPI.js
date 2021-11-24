import apiUrl from './apiUrl';

const setCurrentLocation = (location) => {
  localStorage.setItem('location', location);
};

const refreshLocationDetails = async () => {
  const location = localStorage.getItem('location');
  const response = await fetch(apiUrl + 'places/name/' + location, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await response.json();
  const data = JSON.stringify(json);
  localStorage.setItem('data', data);
};

export { setCurrentLocation, refreshLocationDetails };
