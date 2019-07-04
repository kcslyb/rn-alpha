import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  DrawerItems
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, Platform, SafeAreaView} from 'react-native';
import Login from '../pages/login.js';
import Main from '../pages/main.js';
import Order from '../pages/order.js';
import Cart from '../pages/cart.js';
import Info from '../pages/selfinfo.js';
import UserInfo from '../pages/user/user-info.js';

/*export const drawerNavigator = createDrawerNavigator({
  info: {
    screen: Info,
    navigationOptions: {
      drawerLabel: '菜单',
      drawerIcon: ({tintColor}) => {
        return <MaterialIcons
          name={'drafts'}
          size={20}
          style={{color: tintColor}}
        />
      }
    }
  }
},{
  initialRouteName: 'info',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  contentComponent:(props) => (
      <ScrollView style= {{color: '#789', flex: 1}}>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
  )
});
export const topNavigator = createMaterialTopTabNavigator({
  main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'main',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style= {{color: tintColor}}
          />
      )
    }
  },
  order: {
    screen: Order,
    navigationOptions: {
      tabBarLabel: 'order',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style={{color: tintColor}}
          />
      )
    }
  },
},{
  tabBarOptions: {
    tabStyle: {
      minWidth: 50
    },
    upperCaseLabel: false,//是否使标签大写，默认为true
    scrollEnabled: true,//是否支持 选项卡滚动，默认false
    // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
    // inactiveTintColor: 'shite',//label和icon的前景色 活跃状态下（未选中）
    style: {
      backgroundColor: '#789',//TabBar 的背景颜色
    },
    indicatorStyle: {
      height: 2,
      backgroundColor: '#456',
    },//标签指示器的样式
    labelStyle: {
      fontSize: 13,
      marginTop: 6,
      marginBottom: 6,
    },//文字的样式
  }
});
*/

const RouterNavigator = createStackNavigator({
  user: {
    screen: UserInfo,
    navigationOptions: {

    }
  }
});

const MainStackNavigatorRouter = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: {
      title: `首页`,
      headerTitleStyle: {fontSize: 18, color: '#fff'},
      headerStyle: {height: 48, backgroundColor: '#4293f5'}
    }
  },
});
const OrderStackNavigatorRouter = createStackNavigator({
  order: {
    screen: Order,
    navigationOptions: {
      headerTitle: '订单',
      headerTitleStyle: {fontSize: 18, color: '#fff'},
      headerStyle: {height: 48, backgroundColor: '#4293f5'}
    }
  }
});
const CartStackNavigatorRouter = createStackNavigator({
  cart: {
    screen: Cart,
    navigationOptions: {
      headerTitle: '购物车',
      headerTitleStyle: {fontSize: 18, color: '#fff'},
      headerStyle: {height: 48, backgroundColor: '#4293f5'}
    }
  }
});
const InfoStackNavigatorRouter = createStackNavigator({
  info: {
    screen: Info,
    navigationOptions: {
      headerTitle: '我的',
      headerTitleStyle: {fontSize: 18, color: '#fff'},
      headerStyle: {height: 48, backgroundColor: '#4293f5'}
    }
  }
});

export const bottomNavigator = createBottomTabNavigator({
  main: {
    screen: MainStackNavigatorRouter,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={'ios-person'}
              size={26}
              style={{color: tintColor}}
          />
      ),
    }
  },
  order: {
    screen: OrderStackNavigatorRouter,
    navigationOptions: {
      tabBarLabel: '订单',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={'ios-person'}
              size={26}
              style={{color: tintColor}}
          />
      ),
    }
  },
  cart: {
    screen: CartStackNavigatorRouter,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={'ios-person'}
              size={26}
              style={{color: tintColor}}
          />
      ),
    }
  },
  info: {
    screen: InfoStackNavigatorRouter,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={'ios-person'}
              size={26}
              style={{color: tintColor}}
          />
      ),
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
});

export const loginNavigator = createStackNavigator({
  login: {
    screen: Login,
  }
},{
  navigationOptions: {
    header: null
  }
});

export const appNavigator = createSwitchNavigator({
  auth: loginNavigator,
  home: bottomNavigator,
  router: RouterNavigator
},{
  initialRouteName: 'auth'
});
