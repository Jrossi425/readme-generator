// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/lisence-${license}-red`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.License)}
  
## Description
${data.Description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This project uses ${data.License}

## Contributions
${data.Contributing}

## Tests
${data.Tests}

## Questions
${data.Github}
${data.Email}
`;
}

module.exports = {
  generateMarkdown,
};
