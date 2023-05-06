
const sum = function(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return fromN + sum(fromN + 1, toN);

};
sum(3,7);
module.exports = sum;
