
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Usernane?"
    },
    {
        type:"input",
        name:"email",
        message: "What is your email address?"  
    },
    {
        type:"input",
        name:"URL",
        message:"What is the URL of your project?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Please give a short description of your project"
    },
    {
      type: "list",
      message: "What kind of license would you like to use?",
      name: "license",
      choices: [
          "MIT",
          "APACHE 2.0",
          "GPL 3.0",
          "BSD 3",
          "None"
      ]
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to to run tests?"
    },
    {
       type: "input",
       name: "repo",
       message: "What does the user need to know about the repo?"
    },
    {
       type:"input",
       name:"contributions",
       message:"What does the user need to know about contributing to the repo?"
    }
  ]);
  }

    function generateMarkdown(data) {
      return `
      # myproject
      ${data.title} - ${data.title}
      
      ${data.URL}
    
      ## Description
      ${data.description}
    
      #Table of Contents
    
      -[Installation] (#installation)
    
      -[Usage](#usage)
    
      -[License](#license)
    
      -[Questions](#questions)
    
      ## Installation
    
      To install necessary dependencies, run the following command:
      ...
      ${data.installation}
      ...
    
      ## Usage
    
      ${data.repo}
    
      ## License
    
      This project is licensed under ${data.license}
    
      ## Contributing
    
      ${data.contributions}
    
      ## Tests
    
      To run tests, run the following command:
    
      ...
      ${data.tests}
      ...
    
      ## Questions
    
      If you have any questions please email me at ${data.email}. 
    
      `;
      }

      promptUser()
      .then(function(data) {
        const markdown = generateMarkdown(data);
    
        return writeFileAsync("README.md", markdown);
      })
      .then(function() {
        console.log("Successfully wrote to index.html");
      })
      .catch(function(err) {
        console.log(err);
      });
    