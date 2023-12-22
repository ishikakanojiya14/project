let arr = [1, 2, 3, 4, 5, 0, -1, -2];
let result = 5;
let obj = {};
for(let i=0 ; i<arr.length; i++){
  let valueNeeded = result - arr[i];
  if(valueNeeded in obj) {
    console.log(valueNeeded, arr[i]);
    obj[arr[i]] = i;
  }else {
    obj[arr[i]] = i;
  };
}