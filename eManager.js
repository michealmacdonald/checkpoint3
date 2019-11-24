var spideyInfo = [{
    name: "Peter Parker",
    phone: "1231231234",
    email: "webslinger@gmail.com",
    title: "Spider-Man"
}]
var docOcInfo = [{
    name: "Dr. Otto Octavius",
    phone: "1231231234",
    email: "tentacles@gmail.com",
    title: "Doctor Octopus"
}]
var goblinInfo = [{
    name: "Norman Osbourne",
    phone: "1234567890",
    email: "pumkinspicebomb@gmail.com",
    title: "Green Goblin"
}]
var venomInfo = [{
    name: "Eddie Brock",
    phone: "1231231234",
    email: "symbiote32@gmail.com",
    title: "Venom"
}]
var shockerInfo = [{
    name: "Herman Schultz",
    phone: "1231231234",
    email: "alwayseasytobeat@gmail.com",
    title: "The Shocker"
}]
var managerObjects = {} 
module.exports = {
    beforeEach: browser => {
        managerObjects = browser.page.eManagerObj()
        managerObjects
            .navigate()
    },
    after: browser => {
        managerObjects.end()
    },
    'Spiderman Test': browser => {
        spideyInfo.forEach(test => {
            managerObjects
            .spiderman(test)
        })
    },
    'Goblin Test': browser => {
        goblinInfo.forEach(test => {
            managerObjects
            .greenGoblin(test)
        })

    }
}
            