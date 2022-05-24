import { FormatDate, SHORT_MONTH_CONSTANT } from 'src/constants/date';

const getMonthLeadingZero = (date: Date) => `0${date.getMonth() + 1}`.slice(-2);

const getDateLeadingZero = (date: Date) => `0${date.getDate()}`.slice(-2);

const getYearLastTwoDigits = (date: Date) =>
  Number(
    date
      .getFullYear()
      .toString()
      .substr(-2)
  );

export const dateToString = (
  date: Date,
  formatDate: string = FormatDate.Default
): string => {
  const separate = formatDate.includes('-') ? '-' : '/';
  const detail: Array<string> = formatDate.split(separate);
  const result: Array<number> | Array<string> = [];

  for (let i = 0; i < detail.length; i++) {
    switch (detail[i]) {
      case 'd':
        result[i] = date.getDate();
        break;
      case 'dd':
        result[i] = getDateLeadingZero(date);
        break;
      case 'M':
        result[i] = date.getMonth() + 1;
        break;
      case 'MM':
        result[i] = getMonthLeadingZero(date);
        break;
      case 'yy':
        result[i] = getYearLastTwoDigits(date);
        break;
      case 'yyyy':
        result[i] = date.getFullYear();
        break;
      default:
        break;
    }
  }
  return result.join(separate);
};

// parse default value for datepicker
export const parseStringToDate = (date: string) =>
  new Date(date.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'));

export const calculateAge = (birthday: string) => {
  // birthday is a string
  if (birthday) {
    const newBirthday = parseStringToDate(birthday);
    // get difference between two time follow 'miliseconds' unit
    const ageDifMs = Date.now() - newBirthday.getTime();
    // get difference between two time follow 'years' unit
    return Math.abs(
      new Date(ageDifMs).getUTCFullYear() - new Date(0).getUTCFullYear()
    );
  }
  return null;
};

export const toTimeStamp = (fileName: string): string =>
  `${new Date().getTime()}-${fileName}`;

// format date to Month dd, yyyy
export const toDateString = (date: string) => {
  const d = new Date(date);
  const formatted = `${
    SHORT_MONTH_CONSTANT[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

  return date ? formatted : null;
};

export const convertDateToLocaleDate = (date = new Date(), locale = 'en-US') =>
  date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
