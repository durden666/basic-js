const CustomError = require("../extensions/custom-error");
const { arr } = require("./simple-chain");


module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error

  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev')
      i++;
      i++;
    } 
    else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      if ((arr[i - 1]) !== undefined) {
        newArr.pop()
      } 
    }
    else if (arr[i] === '--double-next') {
      if ((arr[i + 1]) !== undefined) {
        newArr.push(arr[i + 1])
      }
    }
    else if (arr[i] === '--double-prev'  && arr[i - 2] !== '--discard-next') {
      if ((arr[i - 1]) !== undefined) {
        newArr.push(arr[i - 1])
      }
    }
     else {
        newArr.push(arr[i]);
    }
  }
    return newArr;
}
