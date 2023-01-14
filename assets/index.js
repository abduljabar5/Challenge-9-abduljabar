// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
function writeToFile(response) {
  let you =  response.location
  let me = response.name
  const {title,Discription,link,Usage,Credits,email,github,contribution,test} = response
  fs.writeFile('README.md',`# ${title}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Discription
${Discription}

## Installation

${link}

## Usage

${Usage}

![Alt text](assets/img/portfolio.png)

## Credits
${Credits}

## License

![Alt text](https://img.shields.io/github/license/${github}/${title})

Copyright (c) 2022 abduljabar5

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Footer
© 2022 GitHub, Inc.
Footer navigation

## Contributions

${contribution}

## Questions

Github: https://github.com/${github}

Email: ${email}

## Tests

${test}

`, (err) =>
  err ? console.error(err) : console.log('Success!')
  )
 }

// // TODO: Create a function to write README file


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the README title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a Discription of the Project.',
      name: 'Discription',
    },
    {
      type: 'input',
      message: 'Add a link to the project.',
      name: 'link',
    },
    {
      type: 'input',
      message: 'Discribe how the project works.',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Add resourses used.',
      name: 'Credits',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'contribution?',
      name: 'Any contributors',
    },
    {
      type: 'input',
      message: 'Test?',
      name: 'test',
    },
  ])
//   .then((response) =>
  

//       console.log(response.name),
    
// // 
  
// )
.then(function (response) {
  console.log(response);
  console.log(response.name);
 
  writeToFile(response)
})

  
      
      
  