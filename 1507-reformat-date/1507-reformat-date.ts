const daysOfMonth = [
  "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
  "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
  "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th",
  "31st"
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
function reformatDate(date: string): string {
  let result: string = '';
  const splittedDate = date.split(" ");
  result += splittedDate[2];
  result += '-' + ('0' + (months.indexOf(splittedDate[1]) + 1)).slice(-2);
  result += '-' + ('0' + (daysOfMonth.indexOf(splittedDate[0]) + 1)).slice(-2);
  return result;
};