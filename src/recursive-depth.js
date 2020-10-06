  
const CustomError = require("../extensions/custom-error");

 module.exports = class DepthCalculator {
   calculateDepth(array) { 
     if (array.length === 0) {
       return 1
      } else {
        return Array.isArray(array) ? 1 + Math.max(...array.map(a => this.calculateDepth(a))) :  0;
      }
     } 
   }



