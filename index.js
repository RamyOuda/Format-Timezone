/* 
  You are receiving time data from an API that 
  is given to you in "short" format strings.

  Below is the data you've received from the 
  API, with their expected "long" version commented.

  Finish the formatTimezone function so that 
  it returns times in the "long" format as a string.
*/

// Note: Input is a string, expected output is a string.
function formatTimezone(timezone) {
  console.log('input:', timezone);

  // WRITE YOUR CODE HERE
}

// Do not alter these variables
const time1 = '+6'; // '+06:00'
const time2 = '+8:30'; // '+08:30'
const time3 = '+16'; // '+16:00'

const time4 = '-3'; // '-03:00'
const time5 = '-8:45'; // '-08:45'
const time6 = '-20'; // '-20:00'

const time7 = '+15:15'; // '+15:15'
const time8 = ''; // '+00:00'

// TESTS - Results in true if passing, false if failing
console.log(formatTimezone(time1) === '+06:00');
console.log(formatTimezone(time2) === '+08:30');
console.log(formatTimezone(time3) === '+16:00');
console.log(formatTimezone(time4) === '-03:00');
console.log(formatTimezone(time5) === '-08:45');
console.log(formatTimezone(time6) === '-20:00');
console.log(formatTimezone(time7) === '+15:15');
console.log(formatTimezone(time8) === '+00:00');
