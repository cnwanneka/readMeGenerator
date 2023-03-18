import inquirer from 'inquirer';
import fs from "fs/promises";


let {description, size} = await inquirer
  .prompt([

    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project:",
       },
       {

        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter(val) {
            return val.toLowerCase();
        },
       },

  ])

  let readmeText = `# Project Description
  ${description}

  ## The second largest heading

  ${generateLicense(size)}

  ###### The smallest heading
  
  
  `

  fs.writeFile("README.md",readmeText )


  function generateLicense(license) {

    if (license === "Jumbo") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        
    }


    
         return``


  }

  console.log(description, last_name);
    
  










   