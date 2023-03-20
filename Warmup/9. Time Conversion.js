function timeConversion(s) {
  // Write your code here
  let amOrPm = s.slice(-2);
  let hour = parseInt(s.slice(0, 2));
  let res = '';

  if (amOrPm === "PM" && hour === 12) {
    console.log("son 12");
    res = ``
  }
  return res
}

// timeConversion('07:05:45PM')
timeConversion("12:01:00PM");
