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

export const getSpartanImg = async gamertag => {
  const url = `https://www.haloapi.com/profile/h5/profiles/${gamertag}/spartan?size=512&crop=full`;
  const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
  try {
    const response = await fetch(cors_proxy + url, options);
    if (!response.ok) {
      throw new Error('Error: Please enter an existing Xbox Gamertag.');
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch ({ message }) {
    throw Error(message);
  }
};

export const getEmblem = async gamertag => {
  const url = `https://www.haloapi.com/profile/h5/profiles/${gamertag}/emblem?size=512`;
  const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
  try {
    const response = await fetch(cors_proxy + url, options);
    if (!response.ok) {
      throw new Error('Failed to retrieve Spartan emblem.');
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch ({ message }) {
    throw Error(message);
  }
};

export const getStats = async gamertag => {
  const url = `https://www.haloapi.com/stats/h5/servicerecords/arena?players=${gamertag}`;
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to retrieve ${gamertag}'s Service Record`);
    }
    const data = response.json();
    return data;
  } catch ({ message }) {
    throw Error(message);
  }
};

export const getEnemies = async () => {
  const url = 'https://www.haloapi.com/metadata/h5/metadata/enemies';
  const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to retrieve Enemies data`);
    }
    const data = response.json();
    return data;
  } catch ({ message }) {
    throw Error(message);
  }
};
