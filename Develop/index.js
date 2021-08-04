// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide any usage information',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution guidelines for your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instruction',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Input the license for your project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const writeReadme = (answers) => `



`

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFileAsync('README.md', writeReadme(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
