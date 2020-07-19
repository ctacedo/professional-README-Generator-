// establishing requirements 
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");

// generated README file 
var newFile = "generatedREADME.md"

//questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a project description:",
        name: "description"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        message: "What kind of license does your project have?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "Provide command to run installion:",
        name: "install"
    },
    {
        type: "input",
        message: "Provide test instructions:",
        name: "test"
    },
    {
        type: "input",
        message: "Provide repository usage:",
        name: "using"
    },
    {
        type: "input",
        message: "Provide repository contributions:",
        name: "contributing"
    }

];

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        
        fs.writeFile(newFile, generateMarkdown(response), function(err) {
            if (err) throw err;
            else console.log(`Success! Your new file is called ${newFile}`);
        })
    })
}

init();