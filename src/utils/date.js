import moment from 'moment';

// Converts date into specific format
// @date - current date (Date or String)
// @format - new date format (String)
// @parseFormat - format for parse specified date (String) (Optional)
export function formatDate(date, format, parseFormat) {
  if (parseFormat) {
    return moment(date, parseFormat).format(format);
  } else {
    return moment(new Date(date)).format(format);
  }
}
