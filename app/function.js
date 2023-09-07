/**
 *
 * @param {*} date
 * @returns
 */
const day_count = (date) => {
  const old_date = new Date(date);
  const new_date = new Date();

  const time_dif = new_date.getTime() - old_date.getTime();
  const fin_date = Math.floor(time_dif / 1000 / 60 / 60 / 24);

  if (fin_date > 120) {
    return `you are available befor ${fin_date - 120}`;
  }
  if (fin_date <= 120) {
    return `you are available after ${120 - fin_date}`;
  }
};
