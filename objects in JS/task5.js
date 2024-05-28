const users = [
    {
        name: 'Dariia',
        email: 'test@gmail.com',
        age: 45
    },
    {
        name: 'Artem',
        email: 'art@mail.com',
        age: 10
    },    
    {
        name: 'Sam',
        email: 'sam@mail.com',
        age: 19
    },
    {
        name: 'Marta',
        email: 'marta@mail.com',
        age: 24
    },
    {
        name: 'Jhon',
        email: 'jhon@mail.com',
        age: 90
    }

]

for (const user of users){
    const {name, email, age} = user
    // console.log(user)
    console.log( "User:" ,name, ", Email:", email,", Age:", age)
}