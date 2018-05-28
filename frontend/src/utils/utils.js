export function formatDigitsForDisplay(digit) {
  if (digit < 10) {
    return '0' + digit;
  }

  return digit;
}

export function formatDate(currentDate) {
  var today = new Date();
  var day = formatDigitsForDisplay(today.getDate());
  var month = formatDigitsForDisplay(today.getMonth() + 1);
  var year = today.getFullYear();
  var hours = formatDigitsForDisplay(today.getHours());
  var minutes = formatDigitsForDisplay(today.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
