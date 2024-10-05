# GDG Digital Badge Generator

## License | Contributors | Forks

---

## Introduction

The **GDSC Digital Badge Generator** is a web-based tool that allows users to create personalized digital badges by uploading their photo, sharing their name, and providing their GitHub username. Once the information is added, the badge can be generated and downloaded, including the GDd PCE logo.

### How to Contribute

This repository is open to all kinds of contributions under the Hacktoberfest guidelines. Whether you're fixing bugs, adding new features, or improving documentation, your contributions are welcome!

Before contributing, please ensure you've read and understood the [contributing guidelines](CONTRIBUTING.md).

#### Steps to Contribute:

1. Fork the repository to your GitHub account.
2. Create a new branch for the feature or bug you're working on.
3. Make your changes and commit them with clear messages.
4. Submit a pull request (PR) for review.
5. Wait for a maintainer to assign you an issue or approve your PR.

### How to Use the Badge Generator

1. **Upload a Photo**: Users can upload their photo, which will be displayed on the badge.
2. **Enter Name**: Provide your name, which will be displayed prominently on the badge.
3. **Enter GitHub Username**: Enter your GitHub username to be shown on the badge.
4. **Generate the Badge**: Once all inputs are added, generate the badge with a click.
5. **Download the Badge**: After generating, users can download the badge as an image.

---

### Using html2canvas for Badge Download

We are using `html2canvas` to allow users to download the badge as an image. `html2canvas` is a JavaScript library that takes screenshots of webpages or parts of webpages, which is useful for generating the badge image.

#### Steps to install html2canvas:

1. Install `html2canvas` using npm:

   ```bash
   npm install html2canvas
   ```

## Project Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/gdgpce/digital-badge-generator.git
   cd digital-badge-generator
   ```

2. Open the `index.html` file in any browser to view the Digital Badge Generator.

3. Add your code for image uploading, name and GitHub username customization, and badge generation as specified in the comments within `main.js`.

---

## GitHub Corner

This project includes a GitHub corner to easily access the repository. To add the GitHub corner to your project, visit the GitHub Corners website and follow the instructions.

## Folder Structure

```
digital-badge-generator/
├── assets/
│   └── logo.png            # GDSC logo that appears on badges
├── style.css               # Styles for the page
├── index.html              # Main HTML file for the badge generator
├── main.js                 # JavaScript logic for the badge generation
├── README.md               # Project documentation
└── CONTRIBUTING.md         # steps to contribute file

```

---
## GitHub Corner
This project includes a GitHub corner where users can access the repository easily. To add the GitHub corner to your project, visit the GitHub Corners website and follow the instructions.

## UI Reference Images
Below are the reference images for the UI of the badge generator and the badge itself:
## Badge UI:![image_2024-10-05_233751388 1](https://github.com/user-attachments/assets/87e84a36-59cc-4366-b72c-c7cf71ab7aa2)


## Overall UI : ![image_2024-10-05_233605414 2](https://github.com/user-attachments/assets/3bef4107-3f47-4bba-a421-d270a05a8af3)


## Guidelines for Contributors

1. **HTML/CSS/JavaScript Contributions**:

   - Add new features or improve the styling in the `index.html` and `styles.css` files.
   - Add image upload or customization logic inside `main.js`.

2. **Bug Fixes**:
   - Report bugs via the GitHub Issues tab.
   - Fix bugs by submitting a pull request after discussing with maintainers.

---

## Future Enhancements

1. **New Badge Templates**: Allow users to select from multiple badge designs.
2. **Live Preview**: Implement a live preview feature before downloading the badge.
3. **Animations**: Add animations to the badge generation process for better user interaction.

---


### Hacktoberfest Participation

Participate in Hacktoberfest by contributing to this project! Make sure the repositories are marked under hacktoberfest label .Contributions must be made between October 1st and October 31st to count toward Hacktoberfest.

Happy coding!
