import moment from 'moment';

export function formatDate(date, format) {
  return moment(new Date(date)).format(format);
}
