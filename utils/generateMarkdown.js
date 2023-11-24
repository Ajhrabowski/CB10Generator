// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  let badgeURL = '';

  switch (license) {
    case 'GNU GPLv3':
      badgeURL = 'https://img.shields.io/badge/License-GPL%20v3-blue.svg';
      break;

    case 'ISC':
      badgeURL = 'https://img.shields.io/badge/License-ISC-blue.svg';
      break;

    case 'Boost Software License 1.0':
      badgeURL = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
      break;

    case 'MIT':
      badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
  }

  // If there is no license, return an empty string
  if (badgeURL) {
    return `![License](${badgeURL})`;
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenseLinks = {

    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'ISC': 'https://opensource.org/license/isc-license-txt/',
    'Boost Software License 1.0': 'https://opensource.org/license/bsl-1-0/',
    'MIT': 'https://opensource.org/licenses/MIT',

  };

  return licenseLinks[license];


}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseSection = '';

  switch (license) {
    case 'GNU GPLv3':
      licenseSection = `
    # License
    
    This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
    `;
      break;


    case 'ISC':
      licenseSection = `
      ## License
      
      This project is licensed under ISC License - see the [LICENSE](LICENSE) file for details.
      `;
      break;

    case 'Boost Software License 1.0':
      licenseSection = `
        ## License
        
        This project is licensed under Boost Software License 1.0 - see the [LICENSE](LICENSE) file for details.
        `;
      break;

    case 'MIT':
      licenseSection = `
  # License
  
  This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.
  `;
  break;
  
  default:
    licenseSection = '';
    break;
  }

  return licenseSection;

}



// Function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data in Markdown Function: ", data);
  
  return `# ${data.title}
  
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  
  # Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Questions](#questions)

# Description
${data.description}

![Image Here](<utils/ReadMe Screenshot.png>)

# Walkthrough Video

* https://drive.google.com/file/d/10-PaV19xWn6Z-VSpxAd8O0GdeqiUttvD/view?usp=sharing

# License
${data.license}

# Installation
${data.installation}

# Usage
${data.usage}

# Contribution
${data.contribution}

# Questions
${data.questions}

* ajhrabowski@gmail.com
* https://github.com/Ajhrabowski

`;

}

module.exports = generateMarkdown;

