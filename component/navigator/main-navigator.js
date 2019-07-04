import {createStackNavigator} from "react-navigation";
import Main from '../pages/main';
import Order from '../pages/order';
import Info from '../pages/selfinfo';

export const MainNavigator = createStackNavigator({
  type: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  }
});
