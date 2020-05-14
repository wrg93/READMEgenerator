// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();



const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer.prompt([
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
    },
  ]).then(function(data){
      fs.writeFile("README.md",JSON.stringify(data,null, '\t'), function(err){
          if (err) {
              return console.log(err);
          }
          console.log("success!");
      })
})