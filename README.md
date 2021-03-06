# React Native & Web Redux
Native and Web React + Redux application with the same code

This repo shows how to implement an application that uses Redux + React and other related dependencys sharing almost the same exact code.
It was inspired by https://github.com/benoitvallon/react-native-nw-react-calculator/.

## Instructions:

1. Clone
2. `npm install`
3. You can build the iOS version by running `npm run start`, don't close this process.
4. Then edit the file `/node_modules/react-native/packager/react-native-xcode.sh`, add `app` to the `--entry-file` option, like this:
   `--entry-file app/index.ios.js \`. _I couldn't found a better solution for this, if anybody have a better solution, please let me know_.
5. Open `/ios/rnwcounter.xcodeproj` in XCode, hit the Run button, this will install the app in the Simulator, also it will automatically connects to the Packager bundler executed in step 3.
6. You can build the Web version by running `npm run dev`. This will watch for changes in the files and re build the bundle.
7. Since I want to keep this small you may need to run a HTTP Server in the root of the project, you can use https://github.com/indexzero/http-server#readme for that.

## Web version

![Web version](https://cloud.githubusercontent.com/assets/1002461/12907675/f10edca2-cebb-11e5-985d-291567b3e28e.gif)

## iOS version
![iOS Native version](https://cloud.githubusercontent.com/assets/1002461/12907674/f0f4d604-cebb-11e5-93fb-e94f5a1a0cb1.gif)

Now you can edit any file and see the change on the Simulator and the Browser.
