<a name="readme-top"></a>


<div align="center">

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">React Glitch Text</h3>

  <p align="center">
    Create a glitch text effect in React
    <br />
    <a href="https://codesandbox.io/p/sandbox/purple-worker-hur815?file=%2Fsrc%2FApp.tsx">View Demo</a>
    ·
    <a href="https://github.com/JohnnyLeek1/React-Glitch-Text/issues">Report Bug</a>
    ·
    <a href="https://github.com/JohnnyLeek1/React-Glitch-Text/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
    </li>
    <li><a href="#current-props-available">Props available</li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<br />


<!-- ABOUT THE PROJECT -->
## About The Project

React Glitch Text is a custom styled component meant to allow developers to easily create a "glitch" effect with any text, easily. It is simply a custom CSS wrapper for a text element.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built Using:
<br />

[![React][React.js]][React-url]
[![StyledComponents][Styled-Components]][Styled-Components-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Utilizing React Glitch Text is incredibly simple. Simply install the package and you can begin using the renderer in any of your components

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* styled-components
  ```sh
  npm install styled-components
  ```

### Installation

1. Install the package
   ```sh
   npm install @johnn-e/React-Glitch-Text
   ```
2. In the jsx/tsx file you wish to include the wrapper:
   ```tsx
   import GlitchText from '@johnn-e/react-glitch-text';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Once the component is imported, you can use it anywhere you'd like like so

```tsx
function App() {
  return (
    <>
      <GlitchText $text='Glitchy' style={{ color: '#000' }} $colorA="#ffbe0b" $colorB="#123abc" />
    </>
  );
}
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Props available

You can use any props that would be available on a HTML Span element. This includes the `style`, `className` and `id` attributes, which allows you to customize the text itself

`text` (**required**) - The text you wish to display

`colorA` - The first color of the glitch effect (defaults to magenta)

`colorB` - The second color of the glitch effect (defaults to blue)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/JohnnyLeek1/React-Mesh-Gradient/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Johnny Leek - [LinkedIn][linkedin-url]

Project Link: [https://github.com/JohnnyLeek1/React-Glitch-Text](https://github.com/JohnnyLeek1/React-Glitch-Text)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/JohnnyLeek1/React-Glitch-Text.svg?style=for-the-badge
[contributors-url]: https://github.com/JohnnyLeek1/React-Glitch-Text/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JohnnyLeek1/React-Glitch-Text.svg?style=for-the-badge
[forks-url]: https://github.com/JohnnyLeek1/React-Glitch-Text/network/members
[stars-shield]: https://img.shields.io/github/stars/JohnnyLeek1/React-Glitch-Text.svg?style=for-the-badge
[stars-url]: https://github.com/JohnnyLeek1/React-Glitch-Text/stargazers
[issues-shield]: https://img.shields.io/github/issues/JohnnyLeek1/React-Glitch-Text.svg?style=for-the-badge
[issues-url]: https://github.com/JohnnyLeek1/React-Glitch-Text/issues
[license-shield]: https://img.shields.io/github/license/JohnnyLeek1/React-Glitch-Text.svg?style=for-the-badge
[license-url]: https://github.com/JohnnyLeek1/React-Glitch-Text/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/johnny-leek
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Sandbox-Link]: https://codesandbox.io/p/sandbox/purple-worker-hur815?file=%2Fsrc%2FApp.tsx
[Styled-Components]: https://img.shields.io/badge/styled-components-black?style=for-the-badge&logo=three.js&logoColor=white
[Styled-Components-url]: https://styled-components.com/


<!-- 
    README Template taken from / inspired by 
    https://github.com/othneildrew/Best-README-Template
-->