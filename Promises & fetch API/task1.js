const planetsName = []
for (let i = 1; i < 11; i++) {
    planetsName.push(
        fetch(`https://swapi.dev/api/planets/${i}`)
            .then((res) => res.json())
            .then((json) => json.name)
    )
}
const result = await Promise.all(planetsName)
console.log(result)
