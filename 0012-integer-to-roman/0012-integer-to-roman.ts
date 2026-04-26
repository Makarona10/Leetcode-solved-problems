const valuesChars: Record<string, number> = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
const ROMAN_CHARS_LEN = 7;
const romanKeys = Object.keys(valuesChars)
const romanVals = Object.values(valuesChars)
function intToRoman(num: number): string {
  const stringifiedNum = num.toString();
  let result = "";
  let box = 1;
  for (const _ of stringifiedNum) box *= 10;
  let current: number = num - (num % box);
  for (let x = 0; x < stringifiedNum.length; x++) {
    box /= 10;
    current = Number(stringifiedNum[x]) * box;
    for (let k = 0; k < ROMAN_CHARS_LEN; k++) {
      let currentVal = romanVals[k];
      let currentChar = romanKeys[k];
      if (current >= currentVal) {
        if (current / box === 9 || current / box === 4) {
          for (let i = k; i < ROMAN_CHARS_LEN; i++) {
            let nextChar = romanKeys[i];
            let nextVal = romanVals[i];
            if (romanVals[k - 1] - nextVal === current) {
              result = result.concat(nextChar).concat(romanKeys[k - 1]);
            }
          }
          break;
        }
        let remainder = current % currentVal;
        if (remainder === 0) {
          result = result.concat(currentChar.repeat(current / currentVal));
          break;
        }
        result = result.concat(
          currentChar.repeat((current - remainder) / currentVal),
        );
        current = remainder;
      }
    }
  }

  return result;
}


// Best Solution with O(1)
const ROMAN_MAP: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

function intToRoman(num: number): string {
  let result = "";
  
  for (const [val, char] of ROMAN_MAP) {
    while (num >= val) {
      result += char;
      num -= val; 
    }
  }
  
  return result;
}
