// render title
function renderTitle(title) {
  return `# ${title}`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>&style=for-the-badge

  if (license) {
    return `https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue?logo=nodedotjs&style=for-the-badge`;
  }
  
  return '';

}

// returns a formatted table of contents link
function renderContentsLink(item) {
  return `[${item}](#${item.toLowerCase().split(' ').join('-')})`;
}

// render basic sections
// -  description
// -  installation instructions
// -  usage information
// -  contribution guidelines
// -  test instructions
function renderBasicSection(title, content) {
  let section = `## ${title}
  
  ${content}`
  return section;
}

// render questions section
function renderQuestions(githubID, email) {
  let section = `Github profile: <a href="https://github.com/${githubID}">${githubID}</a>

  Email <a href="mailto: ${email}">${email}</a> with any further questions.`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMD(data) {
  let md = `${renderTitle(data.Title)}

## Table of Contents

-   ${renderContentsLink('License')}
-   ${renderContentsLink('Description')}
-   ${renderContentsLink('Installation')}
-   ${renderContentsLink('Usage')}
-   ${renderContentsLink('Contributing')}
-   ${renderContentsLink('Testing')}
-   ${renderContentsLink('Questions')}

## License

![](${renderLicenseBadge(data.License)})

## Description

${data.Description}

## Installation

${data.Installation}

## Usage

${data.Usage}

## Contributing

${data.Contributing}

## Testing

${data.Tests}

## Questions

${renderQuestions(data.githubID, data.email)}`

return md;
  
}

module.exports = {
  generate: generateMD
};
