function calculateNetCashPerDay(dayStat) {
  const result = {};

  for (let i = 0; i < dayStat.length; i++) {
    const { dayOfWeek, netCash } = dayStat[i];

    if (result.hasOwnProperty(dayOfWeek)) {
      result[dayOfWeek] += netCash;
    } else {
      result[dayOfWeek] = netCash;
    }
  }
  return result;
}

const dayStat = [
  { dayOfWeek: 1, netCash: 100 },
  { dayOfWeek: 4, netCash: 10 },
  { dayOfWeek: 1, netCash: 100 },
];

console.log(calculateNetCashPerDay(dayStat));
