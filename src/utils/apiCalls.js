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
