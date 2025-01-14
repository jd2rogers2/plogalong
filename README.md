# Plogalong

  ***Plogalong*** is an app for iOS and Android designed to encourage new and
  existing [ploggers](https://en.wikipedia.org/wiki/Plogging) to record the litter they pick up while walking,
  running, or exercising outdoors.

  This is a project of [Code for Boston](https://www.codeforboston.org). If you would like to get involved
  in helping us develop the app, join us at the next [Hack Night](https://www.meetup.com/Code-for-Boston/), and we can
  help you get started.

  We're in the beginning stages of development, but we have a very detailed
  [Mockup](https://marvelapp.com/96b0bd4/screen/53564903).

## Architectural Overview

  This is a young project. We're still figuring out what the pieces are and how
  they'll fit together.

  - React-Native + Expo

  - State Manager (TBD)

  - Database (TBD)

  - Authentication (TBD)

## Setup Instructions



  - Clone this repository (download and extract zip file from https://github.com/codeforboston/plogalong)

  - Node (10.x or 12.x) -- ensure that you have a recent version installed - https://nodejs.org/en/download/
  
  - Make sure that /usr/local/bin is in your $PATH by opening Terminal and typing in echo $PATH (if it's not, follow directions here: https://opensource.com/article/17/6/set-path-linux)

  - (iOS) Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
    _This may take a while... why not go plogging for an hour?_
    <br>...then launch it at least once so that you can agree to it's Terms and
    Conditions.




  - (Android) Install [Android Studio](https://developer.android.com/studio/) and
  create a virtual device.

    [See here](https://docs.expo.io/versions/v32.0.0/workflow/android-studio-emulator/) for detailed instructions 
    To create a virtual device from the Android welcome screen, click configure>AVD Manager 
    To edit your virtual device selection from somewhere other than the welcome screen, click on the AVD Manager icon in the
    toolbar on the top right (looks like a phone with a green android alien)
    <br>_n.b. Since this app will be deployed on the Google Play Store, 
    when creating a virtual device in the AVD Manager, try to choose a device that 
    has the triangular Google Play Store icon next to it._
    Download an available system image
    
  - Install `yarn`: https://yarnpkg.com/lang/en/docs/install/

  - Install node modules: `yarn install`
  (NOTE: Do NOT use `npm install` or `npm ci` as packages like 
  react-native-svg-transformer are not managed through npm and this results in 
  conflicting dependencies and there by in errors)

  - Install Expo: `yarn global add expo-cli` (if you prefer NPM Install Expo: sudo 
  npm install expo-cli --global)

  - Configure Firestore connection: rename the file `firebase/config.js.example` 
  to `firebase/config.js`. Replace the values in `firebase/config.js` by copying 
  in the new config info (which you can find pinned in the #plogalong Slack 
  channel).
  
  - If you're planning on running this on an Android simulator, you'll have to install the Expo app via the simulated 
  device's Google Play Store. To do so, open Android Studio, open the AVD Manager (icon looks like a phone with a green
  Android alien in the top right toolbar), click the Play button under "Actions" to launch the simulator. You can then open
  the Google Play Store on the simulated device. Now search for the Expo app and install it to the simulated device. You may
  have to launch the simulator from Android Studio each time you want to run the app via Expo.

  - In a terminal window, navigate to the root directory of your local clone of
    this repository. Type `expo start` to launch Metro bundler and Expo's
    browser-based developer tools.

  - While Expo runs, you can type `i` to run the app in the iOS simulator. In order to use the Android emulator, launch 
  the Android Virtual Device emulator via Android studio (described above), then type `a` at the terminal to run the app in
  the
    Android emulator. You can also use Expo's local web interface to launch the app.
    
    If you type 'i' and get an error, run 'sudo xcode-select -s /Applications/Xcode.app'
   
  - To run Plogalong on an iOS device: 
  <br>1. Connect both your computer and your iOS device with same Wi-Fi. 
  <br>2. In Expo XDE in your browser, select Connection > LAN
  <br>3. Use the Camera App on your iOS (iOS 11+)Device or any QR code reader (iOS 9 & 10) to scan the QR Code.
  <br>4. Your QR code reader / Camera App, will ask if you want to launch the 
  App in Expo Client App, select "Yes"
  <br>5. Plogalong should load accordingly
  
  //TODO: add directions for running on Android Device
  
## Updating Instructions

- After a pull request is merged, it may specify that node_modules will need 
to be deleted. When this is the case, delete the `node_modules` folder on your 
local repo and execute `yarn install` in your terminal.
<br>_n.b. if you are using npm, execute `npm install` instead of `yarn install`_

- The time may come when you will have to update Expo on your simulator. To do 
so on the iOS simulator, execute `expo install:ios` in your terminal. If it 
doesn't take on the first try, try once more. If you're still stuck after two 
times, consult an expert.

## How to Contribute

  Join us on the Code for Boston Slack. We're in the [#plogalong](https://slack.com/app_redirect?channel=CDQDBALUR "Open in Slack") channel.
