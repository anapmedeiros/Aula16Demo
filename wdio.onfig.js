const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs:[
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "platformVersion": "8.1",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "deviceName": "NativeDemo",
        "appPackage": "com.wdiodemoapp",
        "appWaitActivity": '.Mainactivity',
        "appActivity": ".SplashActivity"
    }]
}