const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } if (isNaN(date)) {
    throw new Eror()
  }
  
  let seasons = date.getMonth();

  if(seasons >= 11 || seasons <= 1 ) {
    return 'winter';
  }else if(seasons >= 2 && seasons <= 4) {
    return 'spring';
  }else if(seasons >= 5 &&seasons <= 7) {
    return 'summer';
  }else{
    return'autumn';
  }
};
