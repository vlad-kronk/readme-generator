// render title
function renderTitle(title) {
  return `## ${title}`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>&style=for-the-badge

  if (license) {
    return `https://img.shields.io/badge/License-${license}-blue&style=for-the-badge`;
  }
  
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license) {
    return '[License](#license)';
  }

  return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let section = `## License\n\n![](${renderLicenseBadge(license)})\n`

  return section;

}

// render table of contents
function renderTableOfContents(arr) {
  let section = `## Table of Contents\n\n`;
  arr.forEach(item => {
    section = `${section}-   [${item}](#${item.toLowerCase})\n`;
  })
}

// render basic sections
// -  description
// -  installation instructions
// -  usage information
// -  contribution guidelines
// -  test instructions
function renderBasicSection(title, content) {
  let section = `## ${title}\n\n${content}\n`
  return section;
}

// render questions section
function renderQuestions(githubID, email) {
  let section = `## Questions\n\n`;
  section = `${section}<a href="https://github.com/${githubID}>Github Profile</a>\n\n`;
  section = `${section} Email <a href="mailto: ${email}">${email}</a> with any further questions.\n`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let md = `${renderTitle}\n`
  
}

module.exports = generateMarkdown;
