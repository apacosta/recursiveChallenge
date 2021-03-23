const x = [1,2,3,[45,76,32,[4,78,0,-45]],3,[[[[[25,67,1,-687,34,[[[[45,52,100,[[[33,25]]]],0.5]],3.45]]],78,2]]],2,1,78];

const sumNestedArr = (array) => {
  //reduce each element of the nested array
  return array.reduce((sum, a) => {
    //validate if current is a number inside the array and then add it to the result, if not return and reduce it
    return sum += !Array.isArray(a) ? a : sumNestedArr(a)
    //initialize accumulator in 0
  }, 0)
};

console.log(sumNestedArr(x));