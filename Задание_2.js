let bool = (isNumberSimple(2)) ? "Число является простым" : "Число не является простым";
console.log(bool);
function isNumberSimple(num) {
  if (num > 1000) {
    console.log("Данные неверны");
    return false;
  }
  else {
    if (num ===1 || num === 0) return false;
    else if (num ===2) return true;  
    else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
        else return true;
      } 
    }
  }
}