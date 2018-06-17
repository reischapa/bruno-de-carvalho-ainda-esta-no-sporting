function getLastUpdatedAtDateString() {
  var date = new Date("Sun Jun 17 2018 20:17:33 GMT+0100 (WEST)")
  var userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() + userTimezoneOffset);
}

