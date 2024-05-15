function divide(numerator, denomerator) {
   if (denomerator === 0){
    throw new Error("You cant devide on 0");
   } 
   if (typeof numerator !== 'number' || typeof denomerator !== 'number'){
    throw new Error("One or both arguments are not a number");
   }

   return numerator / denomerator;
}


try {
    console.log(divide(10, 0));
} catch (e) {
    console.error(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide('a', 5));
} catch (e) {
    console.error(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(10, 2));
} catch (e) {
    console.error(e.message);
} finally {
    console.log('Робота завершена');
}