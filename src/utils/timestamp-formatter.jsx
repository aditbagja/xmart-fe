export const formattedTimestamp = (timestamp) => {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const isMilliseconds = /^\d+$/.test(timestamp);

  const date = isMilliseconds
    ? new Date(Number(timestamp))
    : new Date(timestamp);

  return `${date.getDate()} ${
    bulan[date.getMonth()]
  } ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
