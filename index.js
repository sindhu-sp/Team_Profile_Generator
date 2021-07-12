
const inquirer = require("inquirer");
const fs = require("fs");

const generatedHtmlFilePath = "./dist/team.html";

const Employee = require("./libs/Employee");
const Manager = require("./libs/Manager");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");

 const teamMembers = [];

function addManager() {
inquirer
    .prompt([
        {
            name: "mName",
            type: "input",
            message: "Enter the Manager's name"
        },
        {
            name: "mId",
            type: "input",
            message: "Enter the Manager's ID"
        },
        {
            name: "mEmail",
            type: "input",
            message: "Enter the Manager's Email"
        },
        {
            name: "mOfficeNumber",
            type: "input",
            message: "Enter the Manager's office number"
        },
        
    ])
   
    .then(answers => {
        let manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.mOfficeNumber);
        teamMembers.push(manager);
        addTeamMembers();
        // console.log(manager);

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

function addTeamMembers() {
    inquirer.prompt(
        {
            name: "teamMembers",
            type: "list",
            message: "Choose from the below options to add team members",
            choices: ["Engineer", "Intern", "Exit"]
    })
    .then(({teamMembers}) => {
        evaluateAddTeamMember(teamMembers);
    })
   
};

addManager();

    function addEngineer() {
        inquirer
    .prompt([
        {
            name: "eName",
            type: "input",
            message: "Enter the Engineer's name"
        },
        {
            name: "eId",
            type: "input",
            message: "Enter the Engineer's ID"
        },
        {
            name: "eEmail",
            type: "input",
            message: "Enter the Engineer's Email"
        },
        {
            name: "eGithub",
            type:"input",
            message:"Enter the Engineer's GitHub Username"
        },
        
    ])
    .then(answers => {
        let engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.eGithub);
        teamMembers.push(engineer);
        addTeamMembers();
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
            type: "input",
            message: "Enter the Intern's name"
        },
        {
            name: "iId",
            type: "input",
            message: "Enter the Intern's ID"
        },
        {
            name: "iEmail",
            type: "input",
            message: "Enter the Intern's Email"
        },
        {
            name: "iSchool",
            type:"input",
            message:"Enter the Intern's school"
        },
        
    ])
    .then(answers => {
        let intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool);
        teamMembers.push(intern);
        addTeamMembers();

        // console.log(intern);

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

    function evaluateAddTeamMember(result) {
        if(result === "Engineer"){
            addEngineer();
        }
        else if(result === "Intern"){
            addIntern();
        }
        else if(result === "Exit") {
            generateHtml();
        }

        // console.log(result);
    }

    function generateInitialHtml() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./team.css" />

        </head>
        <body>
            <div class="navbar">
            <h1 class="nTitle">TEAM PROFILE</h1>
            </div>
            <div class="card-body">`
    }

    function generateTeamMembersHtml(teamMembers) {
        return `<div class="card">
        <div class="teamMemberTitle">
        <h3>${teamMembers.getName()} - ${teamMembers.getRole()}</h3>
        </div>
        <div class="teamMemberCard-body">
        <ul>
        <li>ID:${teamMembers.getId()}</li>
        <li>Email: <a href="mailto:${teamMembers.getEmail()}">${teamMembers.getEmail()}</a></li>
        ${teamMembers.getRoleAttribute()}
        </ul>
        </div>
        </div>`;
    }

    function generateFinalHtml() {
        return `</div>
        </body>
        </html>`;
    }


    function generateHtml() {
        fs.writeFileSync(generatedHtmlFilePath, "");
        let htmlData = generateInitialHtml();
        for(var a in teamMembers) {
            htmlData += generateTeamMembersHtml(teamMembers[a]);
        }
        htmlData += generateFinalHtml();
        fs.writeFileSync(generatedHtmlFilePath, htmlData);
    }