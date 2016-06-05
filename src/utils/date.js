import moment from 'moment';

export function formatDate(date, format, parseFormat) {
  if (parseFormat) {
    return moment(date, parseFormat).format(format);
  } else {
    return moment(new Date(date)).format(format);
  }
}
