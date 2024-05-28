const person = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 21
}
person.email = 'test@gmail.com'

delete person.age

console.log(person);