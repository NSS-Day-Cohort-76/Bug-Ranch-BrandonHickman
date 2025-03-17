const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riversNumber = 0; riversNumber < areas.rivers; riversNumber++) {
        journey.push("river")
    }

    for (let forestsNumber = 0; forestsNumber < areas.forests; forestsNumber++) {
        journey.push("forest")
    }

    for (let mountainsNumber = 0; mountainsNumber < areas.mountains; mountainsNumber++) {
        journey.push("mountain")
    }

    for (let plainsNumber = 0; plainsNumber < areas.plains; plainsNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}

module.exports = {
    createRivers, createForests,
    createMountains, createPlains, journeyMaker
}