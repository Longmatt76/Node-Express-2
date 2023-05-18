const hours = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
];

const minutes = [
  "o'clock",
  "oh one",
  "oh two",
  "oh three",
  "oh four",
  "oh five",
  "oh six",
  "oh seven",
  "oh eight",
  "oh nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "thirty",
  "thirty one",
  "thrity two",
  "thirty three",
  "thirty four",
  "thirty five",
  "thirty six",
  "thirty seven",
  "thirty eight",
  "thirty nine",
  "fourty",
  "fourty one",
  "fourty two",
  "fourty three",
  "fourty four",
  "fourty five",
  "fourty six",
  "fourty seven",
  "fourty eight",
  "fourty nine",
  "fifty",
  "fifty one",
  "fifty two",
  "fifty three",
  "fifty four",
  "fifty five",
  "fifty six",
  "fifty seven",
  "fifty eight",
  "fifty nine",
];

function timeWord(string) {
  if (string === "00:00") {
    return "The time is midnight";
  }
  if (string === "12:00") {
    return "The time is noon";
  }

  const splitTime = string.split(":");
  const splitHours = splitTime[0];
  const splitMins = splitTime[1];
  let meridiem;
  let finalHours;
  let finalMins;

  if (parseInt(splitHours) < 12) {
    meridiem = "am";
  } else meridiem = "pm";

  if (splitHours[0] === "0") {
    finalHours = splitHours[1];
  } else finalHours = splitHours;

  if (splitMins[0] === "0") {
    finalMins = splitMins[1];
  } else finalMins = splitMins;

  return `The time is ${hours[finalHours]} ${minutes[finalMins]} ${meridiem}`;
}


module.exports = { timeWord };
