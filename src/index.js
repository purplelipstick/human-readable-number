module.exports = function toReadable (number) {
  numbers = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', 
  '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
  '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', 
  '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
  '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty',
  '70': 'seventy', '80': 'eighty', '90': 'ninety'};
  let numberStr = number.toString();
  if (0 <= number && number <= 19) {
    return numbers[numberStr]
  } else if (20 <= number && number <= 99) {
    if (number % 10 === 0) {
      return numbers[numberStr]
    } else {
      let firstNumber = numberStr.substring(0,1);
      firstNumber += '0';
      let secondNumber = numberStr.substring(1);
      return numbers[firstNumber] + ' ' + numbers[secondNumber]
    }
  } else if (100 <= number && number <= 999) {
    let firstNumber = numberStr.substring(0,1);
    if (number % 100 === 0) {
      return numbers[firstNumber] + ' hundred'
    }
    let remainingPartStr = numberStr.substring(1);
    if (remainingPartStr.substring(0,1) == '0') {
      remainingPartStr = remainingPartStr.substring(1)
    }
    let remainingPart = parseInt(remainingPartStr);
    if (1 <= remainingPart && remainingPart <= 19) {
      return numbers[firstNumber] + ' hundred ' + numbers[remainingPartStr]
    } else if (20 <= remainingPart && remainingPart <= 99) {
      if (remainingPart % 10 === 0) {
        return numbers[firstNumber] + ' hundred ' + numbers[remainingPartStr]
      } else {
        let secondNumber = remainingPartStr.substring(0,1);
        secondNumber += '0';
        let thirdNumber = remainingPartStr.substring(1);
        return numbers[firstNumber] + ' hundred ' + numbers[secondNumber] + ' ' + numbers[thirdNumber]
      }
    }
  }
  return "WRONG NUMBER"
}
