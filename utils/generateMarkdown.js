// function to generate markdown for README
const fs = require('fs'); 

function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  if (licenseType === "GNU Affero General Public License v3.0") {
      licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`
    };
  if (licenseType === "Boost Software License 1.0") {
      licenseString = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    };
  if (licenseType === "The Unlicense") {
      licenseString = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
    }; 
  if (licenseType === "Mozilla Public License 2.0") {
      licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    };   
  return licenseString
  };
function licenseLink(data) {
  const licenseType = data.license[0];
  let licenselink = " "
  if (licenseType === "MIT") {
    licenselink = `[MIT](https://choosealicense.com/licenses/mit/)`
  };
  if (licenseType === "Boost Software License 1.0") {
    licenselink = `[BSL](https://choosealicense.com/licenses/bsl-1.0/)`
  };
  if (licenseType === "The Unlicense") {
    licenselink = `[Unlicense](https://choosealicense.com/licenses/unlicense/)`
  };
  if (licenseType === "Apache License 2.0") {
    licenselink = `[Apache2.0](https://choosealicense.com/licenses/apache-2.0/)`
  };
  if (licenseType === "Mozilla Public License 2.0") {
    licenselink = `[MPL2.0](https://choosealicense.com/licenses/mpl-2.0/)`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenselink = `[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)`
  };
  if (licenseType === "GNU Lesser General Public License 3.0") {
    licenselink = `[GNU LGPL3.0](https://choosealicense.com/licenses/lgpl-3.0/)`
  };
  if (licenseType === "GNU Affero General Public License 3.0") {
    licenselink = `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`
  };
  return licenselink
}

function generateMarkdown(data) {
    return `# ${data.title}

${licenseBadge(data)}

## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#gitHub)
  8. [E-mail](#email)

## Description
${data.description} 

## Installation
${data.installation}

## Usage

${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseLink(data)}

## GitHub
${data.github}

## E-mail
${data.email}`
}
  module.exports = generateMarkdown;
  
