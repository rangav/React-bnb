# Getting started

This guide assumes you already have iOS (Xcode, iOS SDK, etc.) or Android (SDK, emulator, etc.) development environment setup.

**Step 1.** Get Node.js (version 5 or higher). React Native uses it to transform and bundle JS code. The easiest way to install/upgrade/uninstall node is to use [Homebrew](http://brew.sh/).

    brew install node
    node -v
    # Should print something like "v5.10.0"

**Step 2.** Clone this repo. Might take some time because it also contains all dependencies required to build the project (~22MB)

    git clone https://bitbucket.org/frantic/react-bnb.git
    cd react-bnb

**Step 3.** Make sure everything works. Depending on the platform you want to try RN on, run either:

    npm run ios
    npm run android

You should see an iOS simulator or Android emulator with lightblue background saying "Welcome to React Native!". Please let me know if you have any issues getting started, it's important to have the environment set up before the workshop.

# Editors

Feel free to use any editor you are comfortable with for editing JavaScript code. A few ideas (with suggested plugins for better syntax highlighting):

1. [Atom](https://atom.io) (optional: [language-babel](https://atom.io/packages/language-babel))
2. [Sublime Text](https://www.sublimetext.com/3) (optional: [babel-sublime](https://github.com/babel/babel-sublime))
3. [WebStorm](https://www.jetbrains.com/webstorm/)

# Troubleshooting

> npm ERR ....

Make sure your Node.js version is 5 or higher

> adb: Unable to dispatch keyboard events in JS as the react instance has not been attached

If you used IntelliJ or Gradle directly (instead of `npm run android`), run the following commands:

    adb reverse tcp:8081 tcp:8081
    npm start