function nextInLine(arr,item) {
     arr.push(item);
     return arr.shift();
}

let testarr=[1,2,3,4,5];

console.log("Before: "+JSON.stringify(testarr));
console.log(nextInLine(testarr,6));
console.log("After: " + JSON.stringify(testarr));
