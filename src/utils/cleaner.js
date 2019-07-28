export const formatMapData = mapData => {
  const maps = mapData.map(map => {
    return {
      name: map.name,
      description: map.description,
      imageUrl: map.imageUrl
    };
  });
  return maps.filter(map => map.description !== null);
};
