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
  return JSON.parse(data);
};

const getNews = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.news;
};

const getCulture = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.culture;
};

const getDosAndDonts = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.dos;
};

const getPlaces = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.landmarks;
};

const getRestaurants = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.restaurants;
};

const getServices = () => {
  refreshLocationDetails();
  const json = localStorage.getItem('data');
  const data = JSON.parse(json);
  return data.services;
};

export {
  setCurrentLocation,
  refreshLocationDetails,
  getNews,
  getCulture,
  getDosAndDonts,
  getPlaces,
  getRestaurants,
  getServices,
};
