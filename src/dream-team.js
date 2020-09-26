const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
    let teamArr = [];

    if (Array.isArray(members)) {
      members.forEach((item)=> {
    if (typeof(item) =='string' ) {
      teamArr.push(item.trim().charAt(0).toUpperCase());
      }
    })
  } return teamArr.sort().join('');
}


