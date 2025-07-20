// Q1_1
// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       i++;
//       console.log(i);
//     });
//   }
//   return arrFn;
// }

// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

function outer() {
  let arrFn = [];
  for (var Divya = 0; Divya < 3; Divya++) {
    arrFn.push(function fn() {
      Divya++;
      console.log(Divya);
      console.log(window);
    });
  }
  return arrFn;
}

let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

let arr = [1,2,3,4];
console.log(arr, "some operation")