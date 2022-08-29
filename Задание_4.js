function printNumbers(a, b) {
  let i = a; 
  let funcId = setInterval(function(){
    if (i >= b){
      clearInterval(funcId);
    }
    console.log(i);
    i++
  }, 1000)
}
printNumbers(4,8);
