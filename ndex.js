function calculateTax(amount) {
    let tax = 10/100 * amount;
    return tax;
}

function convertToUpperCase(text) {
    let result = text.toUpperCase();
    return result
}


function findMaximum(num1, num2) {
    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }

}
function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discountAmount = originalPrice * discountPercentage / 100;
  let price = originalPrice - discountAmount;
  return price;
}









module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};