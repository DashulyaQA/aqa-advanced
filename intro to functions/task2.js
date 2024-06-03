function checkAdult(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}
const result = checkAdult(25);
const result1 = checkAdult(15);
console.log(result, result1);
