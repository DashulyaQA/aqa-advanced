const width = 5
const height = 10

// function declaration 

function areaRectangle(width, height) {
    const result = width * height
    return result
}
const result = areaRectangle(width, height)
console.log(result);


// function expression 

const areaRectangle1 = function(width, height) {
    const result = width * height
    return result
}
const result1 = areaRectangle1(width, height)
console.log(result1);

// arrow function

const areaRectangle2 = (width, height) => width * height 
console.log(areaRectangle2(width, height));

