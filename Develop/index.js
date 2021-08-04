// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

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
        name: 'technologies',
        message: 'What technologies did you use?',
      },
      {
        type: 'input',
        name: 'functionality',
        message: 'Describe the functionality of your project',
      },
      {
        type: 'input',
        name: 'functionality',
        message: 'Describe the functionality of your project.',
      },
      {
        type: 'input',
        name: 'demo',
        message: 'Insert a markdown formatted link to a demo (screenshot or gif) of your project',
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
        name: 'questions',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Insert a markdown formatted link to your deployed site',
      },
    ]);
  };

// TODO: Create a function to write README file

const writeReadme = (answers) => `

# Welcome to ${answers.title}! 
 
## Link to Deployed Site
${answers.deployed}

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Challenges](#challenges)
  * [Usage](#usage)
  * [Test](#test)
  * [Contributors](#contributors)
  * [License](#license)
  * [Questions](#questions)

## Description
${answers.description}
 

## Technologies
${answers.technologies}

## Functionality
${answers.functionality}

#### Demo

## Challenges
${answers.challenges}

## Usage
${answers.usage}

## Usage
${answers.test}

## Installation
${answers.install}
## Contributors
${answers.contributors}
## Future Development
* Add functionality to send an email whenever a user asks a question in the Contact Me section. 
* Include animations to make the projects section look better. 

## Questions
${answers.questions}
`

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFileAsync('README.md', writeReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
