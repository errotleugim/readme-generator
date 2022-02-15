function init () {

  const inquirer = require('inquirer');
  const fs = require('fs'); 
  const generate = require('./utils/generateMarkdown.js');
  const path = require('path');
  
  inquirer
    .prompt([
      { 
        type: "input",
        message: "Project Title:",
        name: "title",  
           },
      { 
        type: "input",
        message: "Project Description:",
        name: "description",  
           },
      {
         type: "input",
         message: "Installation instructions:",
         name: "installation",
      },
      {
          type: "input",
          message: "Application usage:",
          name: "usage",
      },
      {
          type: "checkbox",
          message: "Project License:",
          choices: ["MIT", "Boost Software License 1.0", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0", "GNU Affero General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
          name: "license",
      },
      {
          type: "input",
          message: "How can people contribute to your project?",
          name: "contributing",
      },
     {
          type: "input",
          message: "Tests utilized:",
          name: "tests"
      },
      {
          type: "input",
          message: "GitHub username:",
          name: "github"
      },
      {
          type: "input",
          message: "Email address for questions:",
          name: "email"
      },
    ])
    .then((response) => {
      return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
    });
  }
  
  init();
  