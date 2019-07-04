/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {appNavigator} from './component/navigator/routers.js';
const stackNavigatorRouterContainer = createAppContainer(appNavigator);

AppRegistry.registerComponent(appName, () => stackNavigatorRouterContainer);
