async function getSwapiDev(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

async function planets() {
    const residentsFromFilmPlanet = []
    const film3 = await getSwapiDev(`https://swapi.dev/api/films/3/`)

    for (const planetUrl of film3.planets) {
        const planet = await getSwapiDev(planetUrl)
        const residentsNames = []
        const planetsWithResidents = {
            planetName: planet.name,
        }

        for (const residentUrl of planet.residents) {
            const resident = await getSwapiDev(residentUrl)
            residentsNames.push(resident.name)
        }
        planetsWithResidents.residents = residentsNames
        residentsFromFilmPlanet.push(planetsWithResidents)
    }
    // console.log(residentsFromFilmPlanet)
    return residentsFromFilmPlanet
}
//planets()

planets().then((residentsFromFilmPlanet) => {
    console.log(residentsFromFilmPlanet)
})
