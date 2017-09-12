let bigInt = require("big-integer");
module.exports = function multiply(first, second) {
    // your solution
    return bigInt(first).multiply(second).toString();

};
