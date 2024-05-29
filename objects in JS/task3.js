const car1 = {
    brand: 'BMW',
    model: 'Gran Turismo',
    year: 2020
}

const car2 = {
    brand: 'Audi',
    model: 'Q5',
    owner: 2019
}

const car3 = {
    ...car1, 
    ...car2
}

console.log(car3)