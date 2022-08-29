function summFunc(num1) {
  return function (num2) {
  return num1 + num2
}
}
let result = summFunc(2);
console.log(result(5));