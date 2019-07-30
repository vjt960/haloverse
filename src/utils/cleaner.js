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

export const formatStats = data => {
  const record = data.Results.shift().Result;
  const info = record.ArenaStats;
  const rank = record.SpartanRank;
  const xp = record.Xp;
  return {
    rank,
    xp,
    kills: info.TotalKills,
    deaths: info.TotalDeaths,
    wins: info.TotalGamesWon,
    losses: info.TotalGamesLost,
    headshots: info.TotalHeadshots,
    shots: info.TotalShotsFired,
    hits: info.TotalShotsLanded,
    damage: info.TotalWeaponDamage,
    time: formatTimeStamp(info.TotalTimePlayed),
    medals: info.MedalAwards.length
  };
};

const isoRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

const formatTimeStamp = time => {
  const matches = time.match(isoRegex);
  return !matches
    ? {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    : {
        hours: matches[6] === undefined ? 0 : matches[6],
        minutes: matches[7] === undefined ? 0 : matches[7],
        seconds: matches[8] === undefined ? 0 : matches[8]
      };
};
