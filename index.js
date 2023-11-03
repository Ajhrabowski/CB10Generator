// Packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

  
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what did you use to install the program?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What was this project used for?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who were the contibutors on this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you choose?',
        choices: ['GNU', 'ISC', 'Boost Software License 1.0', 'MIT']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'For any further questions where can you be reached?'
    },

];

// Function to write README file
function writeToFile(fileName, data) {
    
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log("Data: ", answers)

            let readmeStr = generateMarkdown(answers);
            console.log("Readme Created: ", readmeStr)
        })
        .catch(error => {
            console.log("Error: ", error);
        })
}

// Function call to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
      
        writeToFile("./utils/README.md", generateMarkdown({ ...answers }));
    });
  }


init();
