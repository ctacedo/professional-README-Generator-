// function to generate markdown
function generateMarkdown(data) {

// Added Info
var printLicense = data.license.split(" ").join("_")

// no license scenario 
if (data.license === "NONE") {
  var licenseSection = "This project does not use a license"
} else {
  var licenseSection = `This project is licensed under the ${data.license} license`
}

  return `# ${data.title}

  ![GitHub License](https://img.shields.io/badge/license-${printLicense}-blue.svg)
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command: 
    ${data.install}
  ## Usage
  ${data.using}
  ## License 
  ${licenseSection}
  ## Contributing 
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
    ${data.test}
  ## Questions 
  If you have any questions about the repository, open an issue or contact me directly at ${data.email}.
  You can find more of my work at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
