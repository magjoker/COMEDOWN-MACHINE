//imports the packages needed to get this app to work

let inquirer = require('inquirer');
let fs = require('fs');

// this function collects the user input and writes the markdown file 
function twoBirdsOneStone () {

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      message: 'How would you best describe this project? Some things to keep in mind are, What problem does this solve? What was the inspiration for this project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is required to install this app?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this app? What is the optimal way to use it?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who should be credited with building this application?',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'What license was used for this project?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'Are there any Badges you would like to add?',
      name: 'badges',
    },
    {
      type: 'input',
      message: 'If there are a lot of features, you can list them all here.',
      name: 'features',
    },
    {
      type: 'input',
      message: 'Get Paid! How can the people contribute to you?',
      name: 'how',
    },
    {
      type: 'input',
      message: 'You can write tests for your project, optional.',
      name: 'tests',
    },
  ])
  .then((data) => {
    fs.writeFile("README.md", `
    # ${data.title}

    ## Description
      ${data.description}
    
    ## Installation 
      ${data.installation}
    
    ## Usage 
      ${data.usage}
    
    ## Credits 
      ${data.credits}

    ## License 
      ${data.license}

    ## Badges 
      ${data.badges}

    ## Features 
      ${data.features}

    ## How to Contribute 
      ${data.how}

    ## Tests 
      ${data.tests}
    `, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
};

twoBirdsOneStone();


