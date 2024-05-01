// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const askQuestions = inquirer.prompt(
[
   {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Give a description for your project.",
      name: "description"
    },
    {
      type: "input",
      message: "What is the installation process?",
      name: "installation"
    },
    {
      type: "input",
      message: "How does one use this app?",
      name: "usage"
    },
    {
      type: "list",
      message: "What kind of liscense does this project have?",
      name: "license",
      choices: ["MIT"]
    },
   
    {
      type: "input",
      message: "If you wrote any tests for your application, how can people run those tests?",
      name: "tests"
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
    }
])
.then((response) => {
   const md = `
   # ${response.title}
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   ## Description
   
   ${response.description}
   
   ## Table of Contents 
   
   1. [Installation](#installation)
   2. [Usage](#usage)
   3. [License](#license)
   4. [How to Contribute](#how-to-contribute)
   5. [Tests](#tests)
   6. [Questions](#questions)
   
   ## Installation
   
   ${response.installation}
   
   ## Usage
   
   ${response.usage}
   
   ## License
   
   ${response.license}

   ## How to Contribute

   (https://www.contributor-covenant.org/)

   ## Tests

   ${response.tests}

   ## Questions

   For any additional questions, please contact me:
   github.com/${response.username}
   ${response.email}
   `
   fs.writeFile("README.md", md, function(err){
      if (err) return console.log("Error")
      console.log("the README is ready")
    })
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
