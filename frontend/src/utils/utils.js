export function formatDigitsForDisplay(digit) {
  if (digit < 10) {
    return '0' + digit;
  }

  return digit;
}

export function formatDate(currentDate) {
  var day = formatDigitsForDisplay(currentDate.getDate());
  var month = formatDigitsForDisplay(currentDate.getMonth() + 1);
  var year = currentDate.getFullYear();
  var hours = formatDigitsForDisplay(currentDate.getHours());
  var minutes = formatDigitsForDisplay(currentDate.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
