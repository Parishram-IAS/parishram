export const timeDuration = (startTime) => {
  const currentDate = new Date().getTime();
  const time = currentDate - startTime;
  let msec = time;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  return `${hh > 0 ? `${hh}hours:` : ""} ${mm > 0 ? `${mm}mins:` : ""} ${ss > 0 ? `${ss}sec` : ""}`;
};

export const dateFormatForInputTag = (date) => {
  date.setDate(date.getDate());
  return date.toISOString().substr(0, 10);
};
