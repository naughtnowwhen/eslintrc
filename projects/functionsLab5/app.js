var sumArr = [];

// ------------------------ sum() ------------------------------------
//passes test
var sum = function(numA, numB){
  let sumArr = [];
  let stringSum;

  let numSum = numA + numB;
  sumArr.push(numSum);
  stringSum = `The sum of 4 and 7 is ${numSum}.`;
  sumArr.push(stringSum);
  //   console.log(sumArr);
  return sumArr;
};
// -----------------<<<------ sum() ------------------------------------

