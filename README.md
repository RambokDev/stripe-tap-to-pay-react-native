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
    PoC that demonstrates the usage of Tap to Pay provided by Stripe React native SDK.
    <br />
    <br />
    <br />
  </p>
</div>



<!-- GETTING STARTED -->

## Getting Started

This is an example of how you can use the Tap to Pay provided by Stripe SDK with React Native and Expo.

### Prerequisites

First, install npm on your computer.

  ```sh
  npm install npm@latest -g
  ```

### Installation

Follow this different steps in order to reproduce the demonstration

1. Clone the repository
   ```sh
   git clone https://github.com/RambokDev/stripe-tap-to-pay-react-native.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API url in `app.config.js`
   ```js
   apiUrl: process.env.API_URL ?? 'https://your-api-url/'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->

## Usage

#### 1. Pre-build
   ```sh
   npx expo prebuild
   ```


#### 2. Run your app
   ```sh
    npx expo run:android
   ```

If an error occurred, you may add 'local.properties' file in android folder with the following code :

   ```sh
    sdk.dir = /xxxxx/userxxxx/Library/Android/sdk
   ```

or you can set an environment variable :

   ```sh
    export ANDROID_HOME=/xxxxx/userxxxx/Library/Android/sdk
   ```

#### 3. Build your app :

With expo services

   ```sh
    eas build -p android --profile preview  
   ```

Locally

   ```sh
    eas build -p android --profile preview --local 
   ```

Example of app.config.js

```

module.exports = ({config}) => {
    return {
        ...config,
        extra: {
            apiUrl: process.env.API_URL ?? 'https://www.api-example.com/',
            eas: {
                projectId: "xxxxxxx"
            },
            runtimeVersion: {
                policy: "sdkVersion"
            },

        }
    }
}

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/RambokDev/stripe-tap-to-pay-react-native?style=for-the-badge

[contributors-url]: https://github.com/RambokDev/stripe-tap-to-pay-react-native/graphs/contributors

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/company/soluce-technologies
