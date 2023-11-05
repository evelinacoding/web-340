//To import the Team Manager module
const TeamManager = require('./team-manager');

const { displayTeam } = TeamManager;

const teams = TeamManager.getTeams();


const Alabama = TeamManager.getTeam('Alabama');
const Georgia = TeamManager.getTeam('Georgia');

//Displaying the array in the console window
console.log('-- DISPLAYING TEAMS --');

//Going through the teams array
teams.forEach(function team(team) {
    console.log(displayTeam(team));
});

//Logging Alabama team
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(Alabama));

//Logging Georgia team
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(Georgia));

