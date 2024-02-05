
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RambokDev/stripe-tap-to-pay-react-native">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">Stripe Tap to pay React Native</h3>
  <p align="center">
    POC that demonstrate the usage of tap to pay provided by stripe React native SDK !
    <br />
    <br />
    <br />
  </p>
</div>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you can use the tap to pay provided bu stripe SDK with React native and Expo.

### Prerequisites

First please install npm on your computer.
  ```sh
  npm install npm@latest -g
  ```

### Installation


Follow this different steps in order to reproduce the demonstration

1. Clone the repo
   ```sh
   git clone https://github.com/RambokDev/stripe-tap-to-pay-react-native.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `app.config.js`
   ```js
   apiUrl: process.env.API_URL ?? 'https://your-api-url/',
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. prebuild
   ```sh
   npx expo prebuild
   ```


2. start your app 
   ```sh
    npx expo run:android
   ```

if and error occurred, you may add 'local.properties' file in android/ with the following code : 
   ```sh
    sdk.dir = /xxxxx/userxxxx/Library/Android/sdk
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RambokDev/stripe-tap-to-pay-react-native?style=for-the-badge
[contributors-url]: https://github.com/RambokDev/stripe-tap-to-pay-react-native/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/soluce-technologies
