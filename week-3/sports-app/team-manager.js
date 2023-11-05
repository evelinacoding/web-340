//Importing the class
const Team = require("./team");

//An array for the Team objects
let teams = [
    new Team ('Alabama', 'Crimson Tide', 54),
    new Team ('LSU', "Tigers", 54),
    new Team ("Georgia", "Bulldogs", 54),
    new Team ("Texas", "Longhorns", 54),
    new Team('USC', 'Trojans', 54)
]

//A function to return the Team objects array
function getTeams () {
    return teams;
}

//exports getTeams
module.exports.getTeams = getTeams;

//A function to return a single object from the array
function getTeam(name) {
    return teams.find(team => team.name === name);
}

//Exports getTeam
module.exports.getTeam = getTeam;

//A function to display the team object
function displayTeam(team) {
    return `Name: ${team.name}\n Mascot: ${team.mascot}\n Player Count: ${team.playerCount}\n`
}

//Exporting the displayTeam function 
module.exports.displayTeam = displayTeam;