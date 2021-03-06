const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description
}
## Table of Contents

${data.tableofcontents}

### Installation

${data.installation}

### Usage

${data.usage}

### License

${data.license}

### Contributors

${data.contributors}

### Tests

${data.test}

### Questions

Should you have any questions/comments/concerns please reach out to the email listed below:

github profile: [https://github.com/${data.github}](https://github.com/${data.github})
email address: [${data.email}](mailto:${data.email})
`
}

module.exports = generateMarkdown;