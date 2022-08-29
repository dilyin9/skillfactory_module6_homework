function getArraysNumbers(){
  let arr2 = [22, 22, "333", 0, 11,1,2,3,4,5,true];
  let bool = '';
  let even = 0;
  let notEvent = 0;
  arr.forEach(element => {
    if (typeof element === 'number') {
      if (element === 0) bool = 'Элемент 0'
      else if (element %2 === 0) even += 1
      else notEvent += 1 
    }
  })
  console.log(`Количество четных элементов - ${even}
    Количество нечетных элементов - ${notEvent}
  ${bool}`)
}

getArraysNumbers();