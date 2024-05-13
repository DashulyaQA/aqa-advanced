function checkOrder(avaible, ordered){
    if (ordered === 0)
    return 'Your order is empty'
    else if (ordered < avaible) 
    return 'Your order is accepted'
    else (ordered > avaible)
    return 'Your order is too large, we don`t have enought goods.'
}
const result = checkOrder(10, 0)
const result1 = checkOrder(10, 1)
const result2 = checkOrder(10, 11)
console.log(result);
console.log(result1);
console.log(result2);