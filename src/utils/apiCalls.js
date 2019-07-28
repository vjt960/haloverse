import { apiKey } from './apiKey';

export const getMaps = async () => {
  const url = 'https://www.haloapi.com/metadata/h5/metadata/maps';
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch map data');
    }
    const data = await response.json();
    return data;
  } catch ({ message }) {
    throw Error(message);
  }
};

export const getSpartanImg = gamertag => {
  const url = `https://www.haloapi.com/profile/h5/profiles/${gamertag}/spartan?size=512&crop=full`;
  const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };

  return fetch(cors_proxy + url, options)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob));
};
