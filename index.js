// TODO: Include packages needed for this application
// I included File Structure, Inquirer, and Util.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// This allows me to write files asynchronously.
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
        name: 'challenges',
        message: 'What challenges were faced while creating this project?',
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
        name: 'future',
        message: 'List any ideas for furute devlopment',
      },
      {
        type: 'checkbox',
        name: 'license',
        choices: ['MIT', 'lgpl-3.0', 'MPL-2.0', 'Apache-2.0', 'gpl-3.0'],
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
      {
        type: 'input',
        name: 'deployed',
        message: 'Insert link to your deployed site',
      },
    ]);
  };

// TODO: Create a function to write README file
// This is the string literal that will generate the markdown in the readme.md file.
const writeReadme = (answers) => `

# Welcome to ${answers.title}! 
 
## Link to Deployed Site
[Deployed Site](${answers.deployed})

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

## Demo
![badge](${answers.demo})

## Challenges
${answers.challenges}

## Usage
${answers.usage}

## Test
${answers.test}

## Installation
${answers.install}

## Contributors
${answers.contributors}

## Future Development
${answers.future}

## Questions
${"* " + "Take a look at my GitHub profile to see my other projects: "}
[My GitHub Profile](https://github.com/${answers.github})
${"* " + "If you have any questions, please reach out via email: " + answers.email}

## License
[${answers.license}](https://opensource.org/licenses/${answers.license})\n
![badge](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=success)

`

// TODO: Create a function to initialize app
// This function also writes the readme.md file. 
const init = () => {
    questions()
    .then((answers) => writeFileAsync('./markdown/README.md', writeReadme(answers)))
    .then(() => console.log('Successfully written to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
