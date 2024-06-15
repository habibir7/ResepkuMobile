/**
 * @format
 */

import { LogLevel, OneSignal } from 'react-native-onesignal';
import {AppRegistry} from 'react-native';
import Routes from './src/Routes';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import React,{Component} from 'react';
import storages from './src/storages/store'
import SplashScreen from 'react-native-splash-screen';

const {store,persistor} = storages()

class App extends Component{
    
    
    render(){
        // Remove this method to stop OneSignal Debugging
OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// OneSignal Initialization
OneSignal.initialize("ONESIGNAL_APP_ID");

// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);

// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});
// SplashScreen.hide();
        return(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => App);
