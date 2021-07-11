
const inquirer = require("inquirer");
const fs = require("fs");

const generatedHtmlFilePath = "./dist/Team.html";

const Manager = require("./libs/Manager");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");

 let teamMembers = [];


// Project requirements

// GIVEN a command-line application that accepts user text
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user text
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


inquirer
    .prompt([
        {
            name: "mName",
            type: "text",
            message: "Enter the Manager's name"
        },
        {
            name: "mId",
            type: "text",
            message: "Enter the Manager's ID"
        },
        {
            name: "mEmail",
            type: "text",
            message: "Enter the Manager's Email"
        },
        {
            name: "mOfficeNumber",
            type: "text",
            message: "Enter the Manager's office number"
        },
        {
            name: "addTeamMembers",
            type: "list",
            message: "Choose from the below options to add team members",
            choices: ["Engineer", "Intern", "Exit"]
        },
        
    ])
    // .then(answers => {
    //     fs.writeFileSync(generatedHtmlFilePath, "");
    // })
    // .catch(error => {
    //     if(error.isTtyError){

    //     }
    //     else {

    //     }
    // });

    .then(answers => {
        let manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.mOfficeNumber);
        teamMembers.push(manager);
        evaluateAddTeamMember(answers.addTeamMembers)
    })
    .catch(error => {
        if(error.isTtyError){
            console.log("Could not be rendered in the current environment");
        }
        else {
            console.log("Something went wrong")
        }
    });

    function addEngineer() {
        inquirer
    .prompt([
        {
            name: "eName",
            type: "text",
            message: "Enter the Engineer's name"
        },
        {
            name: "eId",
            type: "text",
            message: "Enter the Engineer's ID"
        },
        {
            name: "eEmail",
            type: "text",
            message: "Enter the Engineer's Email"
        },
        {
            name: "eGithub",
            type:"text",
            message:"Enter the Engineer's GitHub Username"
        },
        {
            name: "addTeamMembers",
            type:"list",
            message:"Choose from the below options to add team members",
            choices: ["Engineer", "Intern", "Exit"]
        },
        
    ])
    .then(answers => {
        let engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.eGithub);
        teamMembers.push(Engineer);
        evaluateAddTeamMember(answers.addTeamMembers)
        
    })
    .catch(error => {
        if(error.isTtyError){
            console.log("Could not be rendered in the current environment");
        }
        else {
            console.log("Something went wrong")
        }
    });

    }

    function addIntern() {
        inquirer
    .prompt([
        {
            name: "iName",
            type: "text",
            message: "Enter the Intern's name"
        },
        {
            name: "iId",
            type: "text",
            message: "Enter the Intern's ID"
        },
        {
            name: "iEmail",
            type: "text",
            message: "Enter the Intern's Email"
        },
        {
            name: "iSchool",
            type:"text",
            message:"Enter the Intern's school"
        },
        {
            name: "addTeamMembers",
            type:"list",
            message:"Choose from the below options to add team members",
            choices: ["Engineer", "Intern", "Exit"]
        },
        
    ])
    .then(answers => {
        let intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool);
        teamMembers.push(intern);
        evaluateAddTeamMember(answers.addTeamMembers)
        
    })
    .catch(error => {
        if(error.isTtyError){
            prompt("Could not be rendered in the current environment");
        }
        else {
            prompt("Something went wrong")
        }
    });

    }

    function evaluateAddTeamMember(result) {
        if(result === "Engineer"){
            addEngineer();
        }
        else if(result === "Intern"){
            addIntern();
        }
        else {
            generatedHtml();
        }
    }

    function generateHtml() {
        fs.writeFileSync(generatedHtmlFilePath, "")
    }