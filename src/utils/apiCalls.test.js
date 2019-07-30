import {
  getMaps,
  getSpartanImg,
  getEmblem,
  getStats,
  getEnemies
} from './apiCalls';
import { apiKey } from './apiKey';

describe('apiCalls', () => {
  describe('getMaps', () => {
    let mockMaps;

    beforeEach(() => {
      mockMaps = [{ name: 'map_1' }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMaps)
        });
      });
    });

    it('should be called with the correct url', () => {
      const url = 'https://www.haloapi.com/metadata/h5/metadata/maps';
      const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
      const expected = [url, options];
      getMaps();
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an array of maps (HAPPY)', async () => {
      const result = await getMaps();
      expect(result).toEqual(mockMaps);
    });

    it('should return an error if response is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getMaps()).rejects.toEqual(Error('Failed to fetch map data'));
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Failed to fetch map data.'
        });
      });
      expect(getMaps()).rejects.toEqual(Error('Failed to fetch map data.'));
    });
  });

  describe('getSpartanImg', () => {
    let mockGamerTag, mockURL;

    beforeEach(() => {
      mockGamerTag = 'exampleGamer';
      mockURL = 'getspartanimg.com';
      window.URL.createObjectURL = jest.fn();
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          blob: () => Promise.resolve(mockURL)
        });
      });
    });

    it('should be called with the correct url', () => {
      const url = `https://www.haloapi.com/profile/h5/profiles/${mockGamerTag}/spartan?size=512&crop=full`;
      const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
      const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
      const expected = [cors_proxy + url, options];
      getSpartanImg(mockGamerTag);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a blob url (HAPPY)', async () => {
      await getSpartanImg(mockGamerTag);
      expect(window.URL.createObjectURL).toHaveBeenCalledWith(mockURL);
    });

    it('should return an error if response is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getSpartanImg()).rejects.toEqual(
        Error('Error: Please enter an existing Xbox Gamertag.')
      );
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Failed to fetch spartan data.'
        });
      });
      expect(getSpartanImg()).rejects.toEqual(
        Error('Failed to fetch spartan data.')
      );
    });
  });

  describe('getEmblem', () => {
    let mockGamerTag, mockURL;

    beforeEach(() => {
      mockGamerTag = 'exampleGamer';
      mockURL = 'getEmblem.com';
      window.URL.createObjectURL = jest.fn();
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          blob: () => Promise.resolve(mockURL)
        });
      });
    });

    it('should be called with the correct url', () => {
      const url = `https://www.haloapi.com/profile/h5/profiles/${mockGamerTag}/emblem?size=512`;
      const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
      const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
      const expected = [cors_proxy + url, options];
      getEmblem(mockGamerTag);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a blob url (HAPPY)', async () => {
      await getEmblem(mockGamerTag);
      expect(window.URL.createObjectURL).toHaveBeenCalledWith(mockURL);
    });

    it('should return an error if response is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getEmblem()).rejects.toEqual(
        Error('Failed to retrieve Spartan emblem.')
      );
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Failed to fetch spartan data.'
        });
      });
      expect(getEmblem()).rejects.toEqual(
        Error('Failed to fetch spartan data.')
      );
    });
  });

  describe('getStats', () => {
    let mockStats, mockGamerTag;

    beforeEach(() => {
      mockGamerTag = 'randomGamer';
      mockStats = [{ name: 'map_1' }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockStats)
        });
      });
    });

    it('should be called with the correct url', () => {
      const url = `https://www.haloapi.com/stats/h5/servicerecords/arena?players=${mockGamerTag}`;
      const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
      const expected = [url, options];
      getStats(mockGamerTag);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a players stat object (HAPPY)', async () => {
      const result = await getStats(mockGamerTag);
      expect(result).toEqual(mockStats);
    });

    it('should return an error if response is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getStats(mockGamerTag)).rejects.toEqual(
        Error("Failed to retrieve randomGamer's Service Record")
      );
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Failed to fetch stat data.'
        });
      });
      expect(getStats(mockGamerTag)).rejects.toEqual(
        Error('Failed to fetch stat data.')
      );
    });
  });

  describe('getEnemies', () => {
    let mockEnemies;

    beforeEach(() => {
      mockEnemies = [{ name: 'badGuy' }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEnemies)
        });
      });
    });

    it('should be called with the correct url', () => {
      const url = 'https://www.haloapi.com/metadata/h5/metadata/enemies';
      const options = { headers: { 'Ocp-Apim-Subscription-Key': apiKey } };
      const expected = [url, options];
      getEnemies();
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an array of maps (HAPPY)', async () => {
      const result = await getEnemies();
      expect(result).toEqual(mockEnemies);
    });

    it('should return an error if response is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getEnemies()).rejects.toEqual(
        Error('Failed to retrieve Enemies data')
      );
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Failed to retrieve Enemies data'
        });
      });
      expect(getMaps()).rejects.toEqual(
        Error('Failed to retrieve Enemies data')
      );
    });
  });
});
