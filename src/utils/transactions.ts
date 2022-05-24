import { dateToString } from 'src/utils/datepicker';
import { DATETIME_FORMAT } from 'src/constants/date-time';

export const formatDay = (item: string) =>
  dateToString(new Date(item), DATETIME_FORMAT.MMDDYYYY);
