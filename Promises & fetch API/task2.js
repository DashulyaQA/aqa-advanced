fetch(`https://swapi.dev/api/people/14`)
    .then((res) => res.json())
    .then((hanSolo) => {
        const starshipNames = []
        for (const starship of hanSolo.starships) {
            starshipNames.push(
                fetch(starship)
                    .then((res) => res.json())
                    .then((startshipName) => startshipName.name)
            )
        }
        return Promise.all(starshipNames).then((starshipNames) => {
            console.log(starshipNames)
            return starshipNames
        })
    })

async function starshipsHanSolo() {
    const hanSolo = await fetch(`https://swapi.dev/api/people/14`)
    const dataSolo = await hanSolo.json()
    const starShipsName = []
    for (const startShips of dataSolo.starships) {
        const res = await fetch(startShips)
        const ships = await res.json()
        starShipsName.push(ships.name)
    }
    console.log(starShipsName)
}
starshipsHanSolo()
