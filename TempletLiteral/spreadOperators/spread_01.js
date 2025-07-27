const arr = [1,2,3];
console.log(arr);

const newArr = [5, 9,arr[0], arr[1], arr[2]];
console.log(newArr);

const new2Array = [7,8,...arr];
console.log(new2Array);

const new3Array = [11,12,...newArr];
console.log(new3Array);
