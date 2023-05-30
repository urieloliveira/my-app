const ONE_SECOND_MS = 1000;
const ONE_MINUTE_MS = ONE_SECOND_MS * 60;
const ONE_HOUR_MS = ONE_MINUTE_MS * 60;
const ONE_DAY_MS = ONE_HOUR_MS * 24;
const ONE_WEEK_MS = ONE_DAY_MS * 7;
const ONE_MONTH_MS = ONE_DAY_MS * 30;
const ONE_YEAR_MS = ONE_DAY_MS * 365;

export const ptBrDateToISO = (value: string): string => {
  const [date, time] = value.split(" ");
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}T${time}Z`;
};

export const daysAgo = (date: string | Date): string => {
  const NOW_MS = new Date().getTime();
  const DATE_MS = new Date(date).getTime();
  const DIFF_MS = NOW_MS - DATE_MS;

  if (DIFF_MS < 30 * ONE_SECOND_MS) {
    return "Agora mesmo";
  }

  if (DIFF_MS < ONE_MINUTE_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_SECOND_MS)} segundos atrás`;
  }

  if (DIFF_MS < ONE_HOUR_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_MINUTE_MS)} minutos atrás`;
  }

  if (DIFF_MS < ONE_DAY_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_HOUR_MS)} horas atrás`;
  }

  if (DIFF_MS < ONE_WEEK_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_DAY_MS)} dias atrás`;
  }

  if (DIFF_MS < ONE_MONTH_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_WEEK_MS)} semanas atrás`;
  }

  if (DIFF_MS < ONE_YEAR_MS) {
    return `Há ${Math.round(DIFF_MS / ONE_MONTH_MS)} meses atrás`;
  }

  return `Há ${Math.round(DIFF_MS / ONE_YEAR_MS)} anos atrás`;
};
