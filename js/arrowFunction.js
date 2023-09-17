let magic = () => new Date();

let myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

const realNumberArray=[4,-5,5.6,-9.8,3.14,42,6];
const squareList=(arr) => {
    const squareIntegers=arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squareIntegers;
};
const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);